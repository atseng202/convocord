class RoomChannel < ApplicationCable::Channel
  def subscribed 
    if params[:channel_id].present?
      stream_from("room_channel_public-#{(params[:channel_id])}")
    elsif params[:privateserver_id].present?
      stream_from("room_channel_private-#{(params[:privateserver_id])}")
    end 
  end 

  def unsubscribed
    stop_all_streams
  end

  def speak(data)
    # Data should be in format of params hash:  { message: {author_id: id, content: "", etc. }  }
    content = data["message"]["content"]
    messageable_id = data["message"]["messageable_id"]
    messageable_type = data["message"]["messageable_type"]

    if check_current_user 
      Message.create!(author_id: logged_in_user.id, content: content, messageable_id: messageable_id, messageable_type: messageable_type)
    else
      ActionCable.server.broadcast build_channel_id(data),  ActiveSupport::JSON.decode(ApplicationController.renderer.render json: ["Invalid credentials"], status: 401)
    end 
  end 

  private 

  def build_channel_id(data)
    messageable_id = data["message"]["messageable_id"]
    messageable_type = data["message"]["messageable_type"]
    if messageable_type == 'Channel'
      "room_channel_public-#{messageable_id}"
    else
      "room_channel_private-#{messageable_id}"
    end  
  end
end 
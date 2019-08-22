class RoomChannel < ApplicationCable::Channel
  def subscribed 
    if params[:channel_id].present?
      stream_from("room_channel-#{(params[:channel_id])}")
    end 
  end 

  def unsubscribed
  end

  def speak(data)
    # Data should be in format of params hash:  { message: {author_id: id, content: "", etc. }  }
    content = data["message"]["content"]
    messageable_id = data["message"]["messageable_id"]
    messageable_type = data["message"]["messageable_type"]

    Message.create!(author_id: logged_in_user.id, content: content, messageable_id: messageable_id, messageable_type: messageable_type)
  end 
end 
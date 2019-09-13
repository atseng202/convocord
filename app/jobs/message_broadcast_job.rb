class MessageBroadcastJob < ApplicationJob 
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast build_channel_id(message), message: ActiveSupport::JSON.decode(render_message(message))
  end 

  private 

  def build_channel_id(message)
    if message.messageable_type == "Channel" 
      "room_channel_public-#{message.messageable.id}"
    else
      "room_channel_private-#{message.messageable.id}"
    end 
  end 

  def render_message(message)
    ApplicationController.renderer.render(partial: "api/messages/message.json.jbuilder", locals: {message: message})
  end 
end 
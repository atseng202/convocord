class MessageBroadcastJob < ApplicationJob 
  queue_as :default

  def perform(message)
    ActionCable.server.broadcast build_channel_id(message.messageable.id), message: ActiveSupport::JSON.decode(render_message(message))
  end 

  private 

  def build_channel_id(id)
    "room_channel-#{id}"
  end 

  def render_message(message)
    ApplicationController.renderer.render(partial: "api/messages/message.json.jbuilder", locals: {message: message})
  end 
end 
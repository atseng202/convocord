class Api::MessagesController < ApplicationController
  before_action :ensure_logged_in

  def create
    # Route for messages in privateservers 
    privateserver = Privateserver.get(params[:message][:author_id], params[:recipient_id])   
    privateserver.is_active = true
    @message = Message.new(message_params)
    @message.messageable = privateserver
    if @message.save 
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end 
  end

  private 

  def message_params 
    params.require(:message).permit(:author_id, :content)
  end 

  def ensure_logged_in
    if !logged_in? 
      render json: ["Invalid credentials"], status: 401
    end
  end
end

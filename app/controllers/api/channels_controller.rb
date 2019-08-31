class Api::ChannelsController < ApplicationController
  before_action :ensure_logged_in

  def show
    @channel = Channel.includes(:messages).find_by(id: params[:id])
    render :show
  end 

  def create
    @channel = Channel.new(channel_params)
    if @channel.save 
      render :show
    else
      render json: @channel.errors.full_messages, status: 422 
    end 
  end 

  private 

  def channel_params
    params.require(:channel).permit(:category_id, :name)
  end 

  def ensure_logged_in 
    if !logged_in?
      render json: ["Invalid credentials"], status: 401
    end 
  end 
end

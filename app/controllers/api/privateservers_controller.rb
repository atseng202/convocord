class Api::PrivateserversController < ApplicationController
  before_action :ensure_logged_in

  def index
    # @privateservers = Privateserver
    # .where(sender_id: current_user.id)
    # .or(
    #   where(recipient_id: current_user.id)
    # )
    @privateservers = current_user.active_privateservers
    render :index
  end 

  def show 
    @privateserver = Privateserver.includes(:messages).find_by(id: params[:id])
    render :show
  end 

  def create 
    @privateserver = Privateserver.includes(:messages).get(current_user.id, params[:privateserver][:recipient_id])
    @privateserver.is_active = true
    if @privateserver.save
      render :show 
    else
      render json: @privateserver.errors.full_messages, status: 422  
    end 
  end 

  def update 
    # Only attribute to update is toggling is_active for privateserver
    @privateserver = Privateserver.find_by(id: params[:id])
    @privateserver.is_active = false
    if @privateserver.save 
      render :show
    else
      render json: @privateserver.errors.full_messages, status: 422
    end  
  end

  private 

  def privateserver_params 
    params.require(:privateserver).permit(:sender_id, :recipient_id)
  end 

   def ensure_logged_in 
    if !logged_in?
      render json: ["Invalid credentials"], status: 401
    end 
  end 
end

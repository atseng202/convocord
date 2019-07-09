class Api::ServersController < ApplicationController
  def index 
    if logged_in? 
      @servers = current_user.servers
      render :index
    else
      render json: ["Invalid credentials"], status: 401
    end  
  end 

  def show 
    if logged_in?
      @server = Server.find_by(id: params[:id])
      render :show
    else 
      render json: ["Invalid credentials"], status: 401
    end 
  end 

  def create 
  end 

  def update 
  end 

  def destroy
  end 

  private 

  def server_params 
    params.require(:server).permit(:moderator_id, :name)
  end 
end

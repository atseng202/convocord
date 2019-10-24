class Api::ServersController < ApplicationController
  before_action :ensure_logged_in

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
      @server = Server.includes(:categories).includes(:users).find_by(id: params[:id])
      render :show
    else 
      render json: ["Invalid credentials"], status: 401
    end 
  end 

  def create 
    if logged_in?
      @server = Server.new(server_params)
      @server.moderator_id = current_user.id

      begin
        ActiveRecord::Base.transaction do 
          # @server.save!
          is_server_saved = @server.save
          servers_user = ServersUser.new(server_id: @server.id, user_id: current_user.id)
          # servers_user.save!
          is_servers_user_saved = servers_user.save
          default_category = Category.new(server_id: @server.id, name: "Text Channels")
          # default_category.save!
          is_default_category_saved = default_category.save
          general_channel = Channel.new(category_id: default_category.id, name: "general")
          # general_channel.save!
          is_general_channel_saved = general_channel.save

          if is_server_saved && is_servers_user_saved && is_default_category_saved && is_general_channel_saved
            render :show
          else
            raise ActiveRecord::Rollback
          end 
        end 

      rescue => exception
        render json: @server.errors.full_messages, status: 422
      end

      # if @server.save
      #   servers_user = ServersUser.new(server_id: @server.id, user_id: current_user.id)
      #   servers_user.save
      #   render :show 
      # else
      #   render json: @server.errors.full_messages, status: 422
      # end  
    else
      render json: ["Invalid credentials"], status: 401
    end 
  end 

  def update 
  end 

  def destroy
  end 

  # Have a new user join an existing server
  def join
    if !logged_in?
      render json: ["Invalid credentials"], status: 401
    end 
    
    @server = Server.find_by(invite_link: params[:server][:invite_link])
    # servers_user = ServersUser.find_by(server_id: @server.id, user_id: current_user.id) ||  ServersUser.new(server_id: @server.id, user_id: current_user.id)
    servers_user = ServersUser.find_or_initialize_by(server_id: @server.id, user_id: current_user.id)
    if @server.present? && servers_user.save
      # ServersUser will either exist or we create it 
      render :show
    else 
      render json: @server.errors.full_messages, status: 422
    end 
  end 

  # Custom route to get a sample of servers for their invite links for new 
  # Users to possibly join
  def sample 
    if !logged_in? 
      render json: ["Invalid credentials"], status: 401
    else  
      @servers = Server.first(3)
      render :index
    end 
  end 

  private 

  def server_params 
    params.require(:server).permit(:moderator_id, :name, :invite_link)
  end 

  def ensure_logged_in
    if !logged_in? 
      render json: ["Invalid credentials"], status: 401
    end 
  end
end

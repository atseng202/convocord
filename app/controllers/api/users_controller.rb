class Api::UsersController < ApplicationController
  def index 
  end

  def create 
    @user = User.new(user_params)
    if @user.save
      login_user!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end  
  end 

  private 

  def user_params 
    params.require(:user).permit(:username, :email, :password)
  end 
end

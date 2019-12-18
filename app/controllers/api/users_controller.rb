class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new(user_params)
  end

  def show
    @user = User.find(params[:id])
    if @user 
      render '/api/users/show'
    else
      render json: {message: "not found"}
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password, :full_name)
  end
end

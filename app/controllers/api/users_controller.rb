class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def new
    @user = User.new(user_params)
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end

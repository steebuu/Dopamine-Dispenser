class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      login(@user)
      render '/api/session/show'
    else
      if !@user
        render json: ["The username you entered doesn't belong to an account. Please check your username and try again."], status: 401
      elsif @user.password != params[:user][:password]
        render json: ["Sorry, your password was incorrect. Please double-check your password."], status: 401
      end
    end
  end

  def new
  end

  def destroy
    if !current_user
      render json: 'not logged in', status: 404
    else
      logout
      render json: {}
    end
  end
end

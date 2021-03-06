class Api::FollowsController < ApplicationController
  def index
    @follows = Follow.all
    render 'api/follows/index'
  end

  def show 
    @follow = Follow.find(params[:id])
    render 'api/follows/show'
  end

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = User.find_by(id: @follow.follower_id)
      render '/api/follows/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end
  end

  def destroy
    @follow = Follow.find(params[:id])
    @follow.delete
    render 'api/follows/show'
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id, :follower_id)
  end
end

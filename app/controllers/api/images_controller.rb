class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render :index 
  end

  def show 
    @post = Post.find(params[:id])
    render :show
  end

  private

  def post_params
    params.require(:image).permit(:caption)
  end
end


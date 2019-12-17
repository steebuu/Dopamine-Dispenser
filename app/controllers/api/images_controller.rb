class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render json: @images
  end

  def show 
    @image = Image.find(params[:id])
    render :show
  end

  def create
    image = Image.new(image_params)
    if image.save
      render json: {message: "You did it!"}
    else
      render json: image.errors.full_messages, status: 422
    end
  end

  def update
    @image = Image.find(params[:id])
    @image.update(caption: params[:image][:caption])
    if image.update
      render json: {message: "Update successful"}
    else
      render json: image.errors.full_messages, status: 422
    end
  end

  private

  def image_params
    params.require(:image).permit(:caption, :photo, :user_id)
  end
end


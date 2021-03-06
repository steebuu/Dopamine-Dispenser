class Api::ImagesController < ApplicationController
  def index
    @images = Image.all
    render 'api/images/index'
  end

  def show 
    @image = Image.find(params[:id])
    render 'api/images/show'
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      @user = User.find_by(id: @image.user_id)
      render '/api/images/show'
    else
      render json: @image.errors.full_messages, status: 422
    end
  end

  def update
    @image = Image.find(params[:id])
    @image.update(caption: params[:image][:caption])
    if @image.save
      render 'api/images/show'
    else
      render json: image.errors.full_messages, status: 422
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.delete
    render 'api/images/show'
  end

  private

  def image_params
    params.require(:image).permit(:caption, :photo, :user_id)
  end
end


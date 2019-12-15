class ImagesController < ApplicationController
  # def show
  #   @image = Image.find(params[:id])
  #   render :show
  # end

  def index
    @images = Image.all
    render :index 
  end

  private

  def post_params
    params.require(:image).permit(:caption)
  end
end

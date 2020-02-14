class Api::LikesController < ApplicationController
    def index
        @likes = Like.all
        render 'api/likes/index'
    end

    def show
        @like = Like.find(params[:id])
        render 'api/likes/show'
    end

    def create
        @like = Like.new(like_params)
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 401
        end
    end

    def destroy
        @like = Like.find(params[:id])
        @like.delete
        render 'api/likes/show'
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :image_id)
    end
end
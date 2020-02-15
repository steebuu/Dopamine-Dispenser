class Api::CommentsController < ApplicationController
    def index
        @comments = Comment.all
        render 'api/comments/index'
    end

    def show
        @comment = Comment.find(params[:id])
        render 'api/comments/show'
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render 'api/comments/show'
        else
            render json: @comment.errors.full_messages, status: 401
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        @comment.delete
        render 'api/comments/show'
    end

    private

    def comment_params
        params.require(:comment).permit(:user_id, :image_id, :body)
    end
end
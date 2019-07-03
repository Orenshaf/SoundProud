class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.find_by(track_id: params[:trackId])
        render :index
    end

    def create
        @comment = Comment.new(track_params);
        if @comment.save 
            render "api/comments/show"
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        render json: {id: params[:id]}
    end

    def track_params 
        params.require(:comment).permit(:body, :user_id, :track_id, :track_time, :parent_cmt_id)
    end
end
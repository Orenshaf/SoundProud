class Api::CommentsController < ApplicationController

    def index 
    end

    def create
    end

    def delete
    end

    def track_params 
        params.require(:track).permit(:body, :user_id, :track_id, :track_time, :parent_cmt_id)
    end
end
class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all
        render :index
    end
    
    def create
        debugger
        @track = Track.new(track_params)
        debugger
        if @track.save
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def update
        @track = Track.find_by(id: params[:track][:id])

        if @user.update(track_params)
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        track = Track.find_by(id: params[:track][:id])
        track.destroy
        render json: {}
    end

    private 

    def track_params
        params.require(:track).permit(:user_id, :title, :description, :private, :genre, :tags, :track_file, :photo)
    end
end
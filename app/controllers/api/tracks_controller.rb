class Api::TracksController < ApplicationController

    def index
        @tracks = Track.all.with_attached_photo.with_attached_track_file
        render :index
    end
    
    def create
        @track = Track.new(track_params)
        if @track.save
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def show
        @track = Track.find_by(id: params[:id])

        if @track 
            render "api/tracks/show"
        else
            render json: ['No entity found'], status: 422
        end
    end

    def update
        @track = Track.find_by(id: params[:track][:id])

        if @track.update(track_params)
            render "api/tracks/show"
        else
            render json: @track.errors.full_messages, status: 422
        end
    end

    def destroy
        track = Track.find_by(id: params[:id])
        track.destroy
        render json: {id: params[:id]}
    end

    private 

    def track_params
        params.require(:track).permit(:user_id, :title, :description, :private, :genre, :tags, :track_file, :photo)
    end
end
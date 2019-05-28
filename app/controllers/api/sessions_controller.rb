class Api::SessionsController < ApplicationController

    def check_email
        @user = User.find_by(email: params[:user][:email])

        if @user
            render "api/session/show"
        else
            render json: ['That profile url does not exist'], status: 422
        end
    end

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ['Invalid username or password'], status: 422
        end
    end

    def destroy 
        if current_user
            logout!
            @user = {}
            render json: {}
        else
            render json: ['You are not signed in'], status: 404
        end
    end
end
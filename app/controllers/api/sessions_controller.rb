class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:loginInfo], params[:user][:password])

        if @user
            login!(@user)
            render "api/users/show"
        else
            if (params[:user][:password].length == 0)
                render json: ['Enter a password.'], status: 422
            else
                render json: ['This password is incorrect.'], status: 422
            end
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
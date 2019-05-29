class Api::UsersController < ApplicationController 

    def check_email
        @user = User.find_by(email: params[:loginInfo]) || User.find_by(profile_url: params[:loginInfo])
        if @user
            render json: {loginInfo: params[:loginInfo], exists: true}
        else
            if is_email?(params[:loginInfo]) 
                render json: {loginInfo: params[:loginInfo], exists: false} 
            elsif invalid_email?(params[:loginInfo])
                render json: ['Enter a valid email address or profile url.'], status: 422
            else
                render json: ['That profile url does not exist'], status: 422
            end
        end
    end
    
    def create
        @user = User.new(user_params)

        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :username)
    end

    def is_email?(loginInfo) 
        loginInfo.include?('@') && loginInfo.include?('.')
    end

    def invalid_email?(loginInfo)
        loginInfo.include?('@') || loginInfo.include?('.')
    end

end
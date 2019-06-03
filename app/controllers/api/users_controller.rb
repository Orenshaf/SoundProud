class Api::UsersController < ApplicationController 

    def check_email
        @user = User.find_by(email: params[:loginInfo]) || User.find_by(profile_url: params[:loginInfo])
        if @user
            render json: {loginInfo: params[:loginInfo], loginType: 'login'}
        else
            if is_email?(params[:loginInfo]) 
                render json: {loginInfo: params[:loginInfo], loginType: 'signup'} 
            elsif invalid_email?(params[:loginInfo])
                render json: ['Enter a valid email address or profile URL.'], status: 422
            elsif (params[:loginInfo].length == 0)
                render json: ['Enter a valid email address or profile URL.'], status: 422
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

    def update
        @user = User.find_by(email: params[:user][:email])

        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :age, :gender, :username)
    end

    def is_email?(loginInfo) 
        loginInfo.include?('@') && loginInfo.include?('.')
    end

    def invalid_email?(loginInfo)
        loginInfo.include?('@') || loginInfo.include?('.')
    end

end
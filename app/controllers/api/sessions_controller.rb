class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login(@user)
            render "api/users/show"
        else
            render json: ["Sorry, you entered an incorrect email address or password."], status: 401
        end
    end


    def destroy
        @user = current_user
        p current_user
        if @user
            logout
            render 'api/users/show'
        else
            render json: ["No user is signed in"], status: 404
        end
    end

end

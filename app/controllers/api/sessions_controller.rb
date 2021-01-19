class Api:: SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            flash.now[:errors] = ['Invalid log-in email and/or password! Please try again.']
        else
            log_in_user!(@user)
            render 'api/users/show'
        end
    end

    def destroy 
        @user = current_user
        if @user 
            logout_user!
            render 'api/users/show'
        end
    end
end
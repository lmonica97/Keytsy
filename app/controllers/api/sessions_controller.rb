class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        # debugger
        if @user
            # debugger
            login(@user)
            render "api/users/show"
          else
            # debugger
            render json: ["Invalid email and/or password combination"], status: 401
        end
    end

    def destroy
        @user = current_user
        # debugger
        if @user
          # debugger
          logout
          render "api/users/show"
        else
          render json: ["Nobody signed in"], status: 404
        end
      end
end
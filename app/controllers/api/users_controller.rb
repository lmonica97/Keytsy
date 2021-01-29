class Api::UsersController < ApplicationController 
    def create
        @user = User.new(user_params)

        if @user.save
          login(@user)
          render "api/users/show"
        else
          
          render json: {
            email: 'Please enter a valid email address', 
            name: "can't be blank.", 
            password: "can't be blank.",
          }, status: 422
        end
      end
    
    def index
      @users = User.all 
    end

    def show 
      @user = User.find_by(id: params[:id])
      # debugger
      render "api/users/show"
    end
    
      private
    
      def user_params
        params.require(:user).permit(:name, :email, :password)
      end
end
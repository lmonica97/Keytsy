class ApplicationController < ActionController::Base
    protect_from_forgery with: :exception 
    helper_method :current_user, :logged_in? 

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user 
    end

    def log_in_user!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token 
        @current_user = user 
    end

    def logout_user!(user)
        current_user.session_token.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def require_user! 
        unless @current_user
            render json: { base: ['Invalid credentials'] }, status: 401
        end 
    end
end

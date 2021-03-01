class Api::ReviewsController < ApplicationController
    before_action only: [:update, :destroy, :create]

    def index 
        debugger
        if params[:product_id]
            debugger
            @reviews = Review.where(product_id: params[:product_id])
            render 'api/reviews/index'
        else 
            return nil 
        end
    end

    def update 
        debugger
        @review = Review.find_by(id: params[:id])
        debugger
        if @review.update(review_params)
            debugger
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        debugger
        if @review.destroy
            debugger
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def create 
        debugger
        @review = Review.new(review_params)
        debugger
        if @review.save && logged_in? 
            debugger
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_message, status: 404
        end
    end

    private 
    def review_params 
        params.require(:review).permit(:reviewer_id, :product_id, :rating, :comment)
    end
end
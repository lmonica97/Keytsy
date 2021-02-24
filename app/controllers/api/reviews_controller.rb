class Api::ReviewsController < ApplicationController
    before_action only: [:update, :destroy, :create]

    def index 
        if params[:product_id]
            @reviews = Review.where(product_id: params[:product_id])
            render 'api/reviews/index'
        else 
            return nil 
        end
    end

    def update 
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])

        if @review.destroy
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def create 
        @review = Review.new(review_params)
        if @review.save && logged_in? 
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
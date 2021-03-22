class Api::ReviewsController < ApplicationController
    before_action only: [:update, :destroy, :create]
    skip_before_action :verify_authenticity_token

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
            @reviews = Review.where(product_id: @review.product_id)
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        productId = @review.product_id
        if @review.destroy
            @reviews = Review.where(product_id: productId)
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 422
        end
    end

    def create 
        @review = Review.new(review_params)
        if @review.save && logged_in? 
            @reviews = Review.where(product_id: @review.product_id)
            render 'api/reviews/index'
        else 
            render json: @review.errors.full_messages, status: 404
        end
    end

    private 
    def review_params 
        params.require(:review).permit(:reviewer_id, :product_id, :rating, :comment)
    end
end
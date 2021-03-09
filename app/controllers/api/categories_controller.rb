class Api::CategoriesController < ApplicationController
    def index 
        @categories = Category.all 
        render 'api/categories/index'
    end

    def show 
        @categoryProducts = Category.find_by(id: params[:id])
        @allProducts = @categoryProducts.products
        render "api/category/show"
    end

    def create 
        @category = Category.create(category_params)
        if @category.save 
        else 
            render json: @category.errors.full_messages, status: 422 
        end 
    end

    private 
    def category_params 
        params.require(:category).permit(:category_name)
    end
end
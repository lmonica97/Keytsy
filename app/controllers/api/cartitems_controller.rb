class Api::CartitemsController < ApplicationController 
    before_action only: [:index, :update, :destroy]

    def index 
        if logged_in?
            @cartitems = Cartitem.all.select{|item| item.user_id == current_user.id }
            render 'api/cartitems/index'
        else
            return nil
        end
    end 

    def update 
        if logged_in?
            @cartitem = Cartitem.find_by(id: params[:id])
                if @cartitem.update(cartitem_params)
                    @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                    render 'api/cartitems/index'
                end
        else
            render json: @cartitem.errors.full_messages, status: 404 
        end
    end 

    def destroy 
        if logged_in? 
            @cartitem = Cartitem.find_by(id: params[:id])
            if @cartitem.destroy 
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                render'api/cartitems/index'
            end 
        else
            render json: @cartitem.errors.full_messages, status: 404 
        end
    end

    def create 
        allCartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
        @cartitem = Cartitem.new(cartitem_params)
        hash = {};
        allCartitems.map { |cartitem| hash[cartitem.product_id] = cartitem.id} 
        if hash.keys.include?(@cartitem.product_id) 
            @existingcartitem = Cartitem.find_by(id: hash[@cartitem.product_id])
            @existingcartitem.quantity = @existingcartitem.quantity + @cartitem.quantity
            if @existingcartitem.save && logged_in? 
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cartitems/index'
            else 
                render json: @cartitem.errors.full_messages, status: 404
            end
        else 
            if @cartitem.save && logged_in? 
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                render 'api/cartitems/index'
            else 
                render json: @cartitem.errors.full_messages, status: 404
            end
        end
    end

    private 
    def cartitem_params 
        params.require(:cartitem).permit(:user_id, :product_id, :quantity)
    end
end
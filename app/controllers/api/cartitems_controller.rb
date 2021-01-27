class Api::CartitemsController < ApplicationController 
    def index 
        @cartitems = Cartitem.all
        render 'api/cartitems/index'
    end 

    def update 
        @cartitem = Cartitem.find_by(id: params[:id])

        if @cartitem.update 
            render 'api/cartitems/index'
        else
            render json: @cartitem.errors.full_messages, status: 404 
        end
    end 

    def show 
        @cartitem = Cartitem.find_by(id: params[:id])
        render 'api/cartitems/show'
    end

    def destroy 
        @cartitem = Cartitem.find_by(id: params[:id])
        if @cartitem.destroy 
            render'api/cartitems/index'
        else 
            render json: @cartitem.errors.full_messages, status: 404 
        end
    end

    def create 
        @cartitem = Cartitem.create(cartitem_params)
        if @cartitem.save 
            render 'api/cartitems/index'
        else 
            render json: @cartitem.errors.full_messages, status: 404
        end
    end

    private 
    def cartitem_params 
        params.require(:cartitem).permit(:user_id, :product_id, :quantity)
    end
end
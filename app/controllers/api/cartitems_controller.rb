class Api::CartitemsController < ApplicationController 
    before_action only: [:index, :update, :destroy]

    def index 
        if logged_in?
            @cartitems = Cartitem.all.select{|item| item.user_id == current_user.id }
            # debugger
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

    # def show 
    #     @cartitem = Cartitem.all.select(|item| item.user_id == current_user.id ) 
    #     render 'api/cartitems/show'
    # end

    def destroy 
        if logged_in? 
            @cartitem = Cartitem.find_by(id: params[:id])
            # debugger
            if @cartitem.destroy 
                # debugger
                @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
                # debugger
                render'api/cartitems/index'
            end 
        else
            render json: @cartitem.errors.full_messages, status: 404 
        end
    end

    def create 
        @cartitem = Cartitem.new(cartitem_params)
        if @cartitem.save && logged_in? 
            @cartitems = Cartitem.all.select{ |item| item.user_id == current_user.id }
            # debugger
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
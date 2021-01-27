
        json.extract! @product, :id, :product_name, :price, :seller_id, :description
        json.photoUrl url_for(@product.photo)
        json.seller do 
            json.partial! "api/users/user", user: @product.seller
        end
        json.cart @product.buyers, :id, :name, :email

        

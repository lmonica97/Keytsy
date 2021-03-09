json.extract! @product, :id, :product_name, :price, :seller_id, :description
json.photoUrl url_for(@product.photo)
json.extract! product.seller, :name
json.cart @product.buyers, :id, :name, :email

        

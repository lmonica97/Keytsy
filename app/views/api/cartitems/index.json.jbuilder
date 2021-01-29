@cartitems.each do |cartitem| 
    # debugger
    json.set! cartitem.id do  
        json.partial! '/api/cartitems/cartitem', cartitem: cartitem 
        json.extract! cartitem.product, :product_name, :price, :seller_id
        json.photoUrl url_for(cartitem.product.photo)
        json.extract! cartitem.product.seller, :name
    end
end
@cartitems.each do |cartitem| 
    json.set! cartitem.id do  
        json.partial! '/api/cartitems/cartitem', cartitem: cartitem 
    # json.partial! '/api/products/product', product: cartitem.product
    end
end
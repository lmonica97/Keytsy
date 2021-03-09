@allProducts.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :product_name, :price
        json.extract! product.seller, :name
        json.extract! product.reviews
        json.photoUrl url_for(product.photo)
    end
end
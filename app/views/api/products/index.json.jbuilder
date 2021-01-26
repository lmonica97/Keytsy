@products.each do |product|
    json.set! product.id do 
        json.partial! "api/products/product", product: product 
        json.photoUrl url_for(product.photo)
    end
end

# json.array! @products do |product|
#     json.extract product, :id, :product_name, :description, :price, :seller_id 
#     json.image url_for(product.image)
# end
@products.each do |product|
    json.set! product.id do 
        json.partial! "api/products/product", product: product 
        json.image_url asset_path("products/#{product.id}")
    end
end
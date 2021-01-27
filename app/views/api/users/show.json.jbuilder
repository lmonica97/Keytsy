   json.partial! "api/users/user", user: @user
    json.products do 
        json.array! @user.products
    end 
    json.cart @user.items, :id, :price, :product_name, :description


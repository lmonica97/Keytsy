json.partial! 'api/cartitems/cartitem', cartitem: @cartitem
json.user @cartitem.user, :id, :name, :email
json.products  @cartitem.product, :product_name, :seller_id, :id, :description, :price
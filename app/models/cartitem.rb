class Cartitem < ApplicationRecord 
    validates :user_id, presence: true 
    validates :product_id, presence: true
    validates :quantity, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
class Product < ApplicationRecord 
    validates :description, presence: true
    validates :seller_id, presence: true 
    # validates :category_id, presence: true 
    validates :product_name, presence: true 
    validates :price, presence: true, numericality: { greater_than: 0, less_than: 1000000 }

    has_one_attached :photo

    belongs_to :seller,
    foreign_key: :seller_id,
    primary_key: :id,
    class_name: :User

end
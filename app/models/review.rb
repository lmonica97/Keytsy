class Review < ApplicationRecord 
    validates :reviewer_id, presence: true 
    validates :product_id, presence: true 
    validates :rating, presence: true 
    validates :comment, presence: true

    belongs_to :reviewer,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :User

    belongs_to :product,
    primary_key: :id,
    foreign_key: :product_id,
    class_name: :Product
end
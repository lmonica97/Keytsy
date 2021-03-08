class Category < ApplicationRecord 
    validates :category_name, presence: true 

    has_many :products,
    foreign_key: :category_id,
    primary_key: :id,
    class_name: :Product 

end
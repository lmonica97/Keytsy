class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.text :description, null: false
      t.integer :seller_id, null: false
      t.string :product_name, null: false
      t.decimal :price, null: false, precision: 10, scale: 2
      t.integer :category_id, null: false
      t.timestamps
    end

    add_index :products, :product_name
    add_index :products, :price 
    add_index :products, :category_id
    add_index :products, :seller_id
  end
end

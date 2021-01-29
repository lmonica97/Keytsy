class CreateCartitems < ActiveRecord::Migration[5.2]
  def change
    create_table :cartitems do |t|
      t.integer :user_id, null: false 
      t.integer :quantity, null: false 
      t.integer :product_id, null: false
      t.timestamps
    end
      add_index :cartitems, :user_id
      add_index :cartitems, :product_id
  end
end

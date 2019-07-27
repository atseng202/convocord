class CreateCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :categories do |t|
      t.integer :server_id, null: false 
      t.string :name, null: false 
      t.timestamps

      t.index :server_id 
      t.index :name, unique: true
    end
  end
end

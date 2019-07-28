class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :category_id, null: false 
      t.string :name, null: false
      t.timestamps

      t.index :category_id
      t.index :name
    end
  end
end

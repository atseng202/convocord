class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :author_id, null: false 
      t.string :content, null: false 
      t.integer :messageable_id
      t.string :messageable_type
      t.timestamps
    end

    add_index :messages, [:messageable_type, :messageable_id]
  end
end

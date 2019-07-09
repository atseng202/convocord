class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.integer :moderator_id, null: false
      t.string :name, null: false
      t.timestamps 

      t.index :moderator_id
      t.index :name, unique: true
    end
  end
end

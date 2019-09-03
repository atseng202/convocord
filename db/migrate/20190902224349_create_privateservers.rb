class CreatePrivateservers < ActiveRecord::Migration[5.2]
  def change
    create_table :privateservers do |t|
      t.integer :sender_id, null: false 
      t.integer :recipient_id, null: false
      t.timestamps

      t.index :sender_id
      t.index :recipient_id
      t.index [:sender_id, :recipient_id], unique: true
    end
  end
end

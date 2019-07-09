class CreateServersUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers_users do |t|
      t.integer :user_id, null: false 
      t.integer :server_id, null: false 
      t.timestamps 

      t.index [:user_id, :server_id], unique: true
    end
  end
end

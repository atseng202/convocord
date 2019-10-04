class AddInviteLinkToServersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :servers, :invite_link, :string, null: false
    
    add_index :servers, :invite_link, unique: true 
  end
end

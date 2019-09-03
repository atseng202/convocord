class AddIsActiveColumnToPrivateservers < ActiveRecord::Migration[5.2]
  def change
    add_column :privateservers, :is_active, :boolean, default: false, null: false
  end
end

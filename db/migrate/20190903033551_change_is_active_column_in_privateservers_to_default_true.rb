class ChangeIsActiveColumnInPrivateserversToDefaultTrue < ActiveRecord::Migration[5.2]
  def change
    change_column :privateservers, :is_active, :boolean, default: true, null: false
  end
end

class RemoveUniqueConstraintOnNameInCategories < ActiveRecord::Migration[5.2]
  def change
    remove_index :categories, :name
  end
end

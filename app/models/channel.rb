class Channel < ApplicationRecord
  validates :name, presence: true 

  belongs_to(
    :category,
    class_name: "Category",
    foreign_key: :category_id,
    primary_key: :id
  )
end 
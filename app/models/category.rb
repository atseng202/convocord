class Category < ApplicationRecord
  validates :name, presence: true

  belongs_to(
    :server,
    class_name: "Server",
    foreign_key: :server_id,
    primary_key: :id
  )

  has_many(
    :channels,
    class_name: "Channel",
    foreign_key: :category_id,
    primary_key: :id,
    dependent: :destroy
  )
end 
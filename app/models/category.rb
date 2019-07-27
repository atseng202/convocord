class Category < ApplicationRecord
  validates :name, presence: true

  belongs_to(
    :server,
    class_name: "Server",
    foreign_key: :server_id,
    primary_key: :id
  )



end 
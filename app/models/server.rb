class Server < ApplicationRecord
  belongs_to(
    :moderator,
    class_name: "User",
    foreign_key: :moderator_id,
    primary_key: :id
  )

  has_many(
    :servers_users,
    class_name: "ServersUser",
    foreign_key: :server_id,
    primary_key: :id
  )

  has_many(
    :users,
    through: :servers_users,
    source: :user
  )
end
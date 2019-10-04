class Server < ApplicationRecord
  validates :name, presence: true

  before_validation :ensure_invite_link 

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
    primary_key: :id,
    dependent: :destroy
  )

  has_many(
    :users,
    through: :servers_users,
    source: :user
  )

  has_many(
    :categories,
    class_name: "Category",
    foreign_key: :server_id,
    primary_key: :id,
    dependent: :destroy
  )

  private 

  def ensure_invite_link 
    self.invite_link ||= SecureRandom::urlsafe_base64(16)
  end 
end
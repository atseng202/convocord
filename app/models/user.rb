class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true

  before_validation :ensure_session_token

  # Associations
  has_many(
    :servers_users,
    class_name: "ServersUser",
    foreign_key: :user_id,
    primary_key: :id,
    dependent: :destroy 
  )

  has_many(
    :servers,
    through: :servers_users,
    source: :server
  )

  has_many(
    :messages,
    class_name: "Message",
    foreign_key: :author_id,
    primary_key: :id,
    dependent: :destroy
  )

  def self.generate_session_token 
    SecureRandom::urlsafe_base64(16)
  end 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end 

  def reset_session_token!
    self.session_token =  User.generate_session_token
    unless !User.exists?(session_token: self.session_token)
      self.session_token = User.generate_session_token
    end
    self.save!
    self.session_token
  end 

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end 

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  private 

  def ensure_session_token 
    self.session_token ||= User.generate_session_token
  end 

end 
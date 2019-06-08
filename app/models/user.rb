class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true

  before_validation :ensure_session_token

  def self.generate_session_token 
    SecureRandom::urlsafe_base64(16)
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
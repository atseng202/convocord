class Privateserver < ApplicationRecord 
  belongs_to(
    :sender,
    class_name: "User",
    foreign_key: :sender_id,
    primary_key: :id
  )

  belongs_to(
    :recipient,
    class_name: "User",
    foreign_key: :recipient_id,
    primary_key: :id
  )

  validates :sender_id, uniqueness: { scope: :recipient_id }

  has_many :messages, as: :messageable, class_name: "Message", dependent: :destroy

  scope :between, -> (sender_id, recipient_id) do 
    where(sender_id: sender_id, recipient_id: recipient_id).or(
      where(sender_id: recipient_id, recipient_id: sender_id)
    )
  end 

  def self.get(sender_id, recipient_id)
    privateserver = between(sender_id, recipient_id).first
    return privateserver if privateserver.present?

    create(sender_id: sender_id, recipient_id: recipient_id)
  end 

  def corresponding_user(user)
    user == recipient ? sender : recipient
  end 
end 
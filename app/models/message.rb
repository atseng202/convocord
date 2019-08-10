class Message < ApplicationRecord
  after_create_commit { MessageBroadcastJob.perform_later self }

  validates :content, presence: true 

  belongs_to :messageable, polymorphic: true 

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id,
    primary_key: :id
  )
end 
json.extract! message, :id, :content, :messageable_id, :messageable_type, :author_id, :created_at
json.readable_date time_ago_in_words(message.created_at)

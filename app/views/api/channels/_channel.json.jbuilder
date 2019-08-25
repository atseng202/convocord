json.channel do 
  json.extract! channel, :id, :category_id, :name
  json.message_ids channel.messages.pluck(:id)
end 

json.messages do 
  channel.messages.each do |message|
    json.set! message.id do 
      json.extract! message, :id, :content, :messageable_id, :messageable_type, :author_id, :created_at
      json.readable_date time_ago_in_words(message.created_at)
    end 
  end 
end 
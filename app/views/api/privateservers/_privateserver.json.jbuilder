json.privateserver do 
  json.extract! privateserver, :id
  json.correspondent_id privateserver.corresponding_user(current_user)
  json.message_ids privateserver.messages.pluck(:id)
end

json.messages do 
  privateserver.messages.each do |message|
    json.set! message.id do 
      json.extract! message, :id, :content, :messageable_id, :messageable_type, :author_id, :created_at
      json.readable_date time_ago_in_words(message.created_at)
    end
  end 
end
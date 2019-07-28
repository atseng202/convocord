json.server do 
  json.extract! server, :id, :moderator_id, :name
  json.member_ids server.users.pluck(:id)
  json.category_ids server.categories.pluck(:id)

  result = []
  server.categories.each do |category|
    result.concat(category.channels.pluck(:id))
  end 
  json.channel_ids result
end 

json.categories do
  server.categories.each do |category|
    json.set! category.id do 
      json.extract! category, :id, :name, :server_id
    end 
  end
end 

json.channels do 
  server.categories.each do |category|
    category.channels.each do |channel|
      json.set! channel.id do 
        json.extract! channel, :id, :name, :category_id
      end 
    end 
  end 
end 
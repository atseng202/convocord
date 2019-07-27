json.server do 
  json.extract! server, :id, :moderator_id, :name
  json.member_ids server.users.pluck(:id)
  json.category_ids server.categories.pluck(:id)
end 

json.categories do
  server.categories.each do |category|
    json.set! category.id do 
      json.extract! category, :id, :name, :server_id
    end 
  end
end 
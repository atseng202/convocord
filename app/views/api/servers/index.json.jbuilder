@servers.each do |server|
  json.set! server.id do 
    json.id server.id
    json.moderator_id server.moderator_id
    json.name server.name
  end 
end 
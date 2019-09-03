@privateservers.each do |privateserver|
  json.set! privateserver.id do 
    json.id privateserver.id
    json.correspondent_id privateserver.corresponding_user(current_user).id
  end
end
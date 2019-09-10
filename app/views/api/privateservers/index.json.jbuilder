@privateservers.each do |privateserver|
  json.set! privateserver.id do 
    json.id privateserver.id
    json.correspondent_id privateserver.corresponding_user(current_user).id
    json.is_active privateserver.is_active

    json.correspondent_username privateserver.corresponding_user(current_user).username
  end
end
json.extract! server, :id, :moderator_id, :name
json.member_ids server.users.pluck(:id)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

testUser = User.create!(username: "test", email: "test@gmail.com", password: "testing")
gage = User.create!(username: "gage", email: "gage@gmail.com", password: "testing")
mod1 = User.create!(username: "mod1", email: "mod1@gmail.com", password: "testing")
mod2 = User.create!(username: "mod2", email: "mod2@gmail.com", password: "testing")
mod3 = User.create!(username: "mod3", email: "mod3@gmail.com", password: "testing")
nba_insider = User.create!(username: "woj", email: "woj@gmail.com", password: "testing")

nba_server = Server.create!(moderator_id: mod1.id, name: "NBA Discussion")
fantasybball_server = Server.create!(moderator_id: mod2.id, name: "Fantasy Basketball Strats")

test_in_nba = ServersUser.create!(user_id: testUser.id, server_id: nba_server.id)
gage_in_nba = ServersUser.create!(user_id: gage.id, server_id: nba_server.id)
mod1_in_nba = ServersUser.create!(user_id: mod1.id, server_id: nba_server.id)

mod2_in_fantasy = ServersUser.create!(user_id: mod2.id, server_id: fantasybball_server.id)
mod3_in_fantasy = ServersUser.create!(user_id: mod3.id, server_id: fantasybball_server.id)
insider_in_fantasy = ServersUser.create!(user_id: nba_insider.id, server_id: fantasybball_server.id)
test_in_fantasy = ServersUser.create!(user_id: testUser.id, server_id: fantasybball_server.id)


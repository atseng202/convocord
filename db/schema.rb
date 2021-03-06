# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_09_29_022706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.integer "server_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_categories_on_name"
    t.index ["server_id"], name: "index_categories_on_server_id"
  end

  create_table "channels", force: :cascade do |t|
    t.integer "category_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_id"], name: "index_channels_on_category_id"
    t.index ["name"], name: "index_channels_on_name"
  end

  create_table "messages", force: :cascade do |t|
    t.integer "author_id", null: false
    t.string "content", null: false
    t.integer "messageable_id"
    t.string "messageable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["messageable_type", "messageable_id"], name: "index_messages_on_messageable_type_and_messageable_id"
  end

  create_table "privateservers", force: :cascade do |t|
    t.integer "sender_id", null: false
    t.integer "recipient_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_active", default: true, null: false
    t.index ["recipient_id"], name: "index_privateservers_on_recipient_id"
    t.index ["sender_id", "recipient_id"], name: "index_privateservers_on_sender_id_and_recipient_id", unique: true
    t.index ["sender_id"], name: "index_privateservers_on_sender_id"
  end

  create_table "servers", force: :cascade do |t|
    t.integer "moderator_id", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "invite_link", null: false
    t.index ["invite_link"], name: "index_servers_on_invite_link", unique: true
    t.index ["moderator_id"], name: "index_servers_on_moderator_id"
    t.index ["name"], name: "index_servers_on_name", unique: true
  end

  create_table "servers_users", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "server_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "server_id"], name: "index_servers_users_on_user_id_and_server_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end

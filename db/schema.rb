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

ActiveRecord::Schema.define(version: 20171205050219) do

  create_table "advices", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "making_image"
    t.text     "advice_body",  limit: 65535
    t.integer  "recipe_id",                  null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.index ["recipe_id"], name: "index_advices_on_recipe_id", using: :btree
  end

  create_table "ingredients", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "ingredient_name", null: false
    t.string   "weight",          null: false
    t.integer  "recipe_id",       null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["recipe_id"], name: "index_ingredients_on_recipe_id", using: :btree
  end

  create_table "recipes", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "title",                      null: false
    t.text     "main_image",   limit: 65535
    t.text     "catchphrase",  limit: 65535
    t.text     "tips",         limit: 65535
    t.integer  "publicpage",                 null: false
    t.text     "background",   limit: 65535
    t.integer  "user_id",                    null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.string   "person"
    t.text     "first_body",   limit: 65535
    t.text     "second_body",  limit: 65535
    t.text     "third_column", limit: 65535
    t.index ["title"], name: "index_recipes_on_title", using: :btree
    t.index ["user_id"], name: "index_recipes_on_user_id", using: :btree
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8" do |t|
    t.string   "email",                                default: "", null: false
    t.string   "encrypted_password",                   default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                        default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                                        null: false
    t.datetime "updated_at",                                        null: false
    t.string   "user_name",                                         null: false
    t.text     "icon_image",             limit: 65535
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
    t.index ["user_name"], name: "index_users_on_user_name", unique: true, using: :btree
  end

  add_foreign_key "advices", "recipes"
  add_foreign_key "ingredients", "recipes"
  add_foreign_key "recipes", "users"
end

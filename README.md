# README

## usersテーブル

|column|type|option|
|--------|--------|--------|
|user_name|string|null: false, add_index :users, :user_name, unique: true|
|icon_image|text|--------|

### association

- has_many :recipes

## recipesテーブル

|column|type|option|
|--------|--------|--------|
|title|string|null: false, add_index :recipes, :title|
|main_image|text|--------|
|catchphrase|text|--------|
|tips|text|--------|
|publicpage|integer|null: false|
|background|text|---------|
|user_id|references|null: false, foreign_key: true|

### association

- belongs_to :user
- has_many :ingredients
- has_many :processes

## ingredientsテーブル

|column|type|option|
|--------|--------|--------|
|ingredient_name|string|null: false|
|weight|string|null: false|
|recipe_id|integer|null: false, foreign_key: true|

### association

- belongs_to :recipe

## processesテーブル

|column|type|option|
|--------|--------|--------|
|making_image|string|-------|
|body|text|null: false|
|recipe_id|integer|null: false, foreign_key: true|

### association

- belongs_to :recipe


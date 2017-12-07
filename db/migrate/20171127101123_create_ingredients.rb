class CreateIngredients < ActiveRecord::Migration[5.0]
  def change
    create_table :ingredients do |t|
      t.string      :ingredient_name, null: false
      t.string      :weight, null: false
      t.references  :recipe, null: false, foreign_key: true
      t.timestamps
    end
  end
end

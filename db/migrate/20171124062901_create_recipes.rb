class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string      :title, null: false
      t.text        :main_image
      t.text        :catchphrase
      t.text        :tips
      t.integer     :publicpage, null: false
      t.text        :background
      t.references  :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end

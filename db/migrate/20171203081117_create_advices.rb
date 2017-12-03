class CreateAdvices < ActiveRecord::Migration[5.0]
  def change
    create_table :advices do |t|
      t.string :making_image
      t.text :advice_body
      t.references :recipe, null: false, foreign_key: true
      t.timestamps
    end
  end
end

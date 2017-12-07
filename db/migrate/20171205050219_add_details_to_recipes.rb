class AddDetailsToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :first_body, :text
    add_column :recipes, :second_body, :text
    add_column :recipes, :third_column, :text
  end
end

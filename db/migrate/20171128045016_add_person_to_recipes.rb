class AddPersonToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :person, :string
  end
end

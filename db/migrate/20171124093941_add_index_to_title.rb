class AddIndexToTitle < ActiveRecord::Migration[5.0]
  def change
    add_index :recipes, :title
  end
end

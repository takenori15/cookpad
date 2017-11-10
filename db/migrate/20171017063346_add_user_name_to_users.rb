class AddUserNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :user_name, :string, null: false
    add_column :users, :icon_image, :text
  end
end

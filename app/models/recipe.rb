class Recipe < ApplicationRecord
  belongs_to :user
  mount_uploader :main_image, IconImageUploader
end

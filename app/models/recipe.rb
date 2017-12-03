class Recipe < ApplicationRecord
  belongs_to :user
  has_many :ingredients
  accepts_nested_attributes_for :ingredients, allow_destroy: true
  mount_uploader :main_image, IconImageUploader
end

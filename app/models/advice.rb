class Advice < ApplicationRecord
  belongs_to :recipe
  mount_uploader :making_image, IconImageUploader
end

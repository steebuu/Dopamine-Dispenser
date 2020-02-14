# == Schema Information
#
# Table name: images
#
#  id         :bigint           not null, primary key
#  user_id    :string           not null
#  caption    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Image < ApplicationRecord
  validates :user_id, presence: true

  validate :ensure_photo

  has_one_attached :photo
  
  def ensure_photo
    unless self.photo.attached?
      errors[:photo] << "Must include image"
    end
  end

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

  has_many :likes,
    class_name: :Like,
    foreign_key: :image_id,
    primary_key: :id,
    dependent: :destroy
end

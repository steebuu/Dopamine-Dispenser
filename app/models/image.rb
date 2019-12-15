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

  has_one_attached :photo

  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id
end

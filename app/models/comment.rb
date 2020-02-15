# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  image_id   :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
    validates :user_id, presence: true
    validates :image_id, presence: true
    validates :body, presence: true
    
    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id

    belongs_to :image,
    class_name: :Image,
    foreign_key: :image_id,
    primary_key: :id
end

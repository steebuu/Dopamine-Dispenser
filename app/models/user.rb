# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  bio             :text
#  full_name       :string
#

class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true

  after_initialize :ensure_session_token
  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    bcp = BCrypt::Password.new(self.password_digest)
    bcp.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def followers_images
    follows = self.followers.includes(:images)

    feed = []
    follows.each do |follower|
      follower.images.each do |image|
        feed << image
      end
    end
    feed
  end

  has_many :images,
    class_name: :Image,
    foreign_key: :user_id,
    primary_key: :id

  has_many :follower_relationships,
    class_name: :Follow,
    foreign_key: :followed_id,
    primary_key: :id

  has_many :followers,
    through: :follower_relationships,
    source: :follower

  has_many :followed_relationships,
    class_name: :Follow,
    foreign_key: :follower_id,
    primary_key: :id

  has_many :followed,
    through: :followed_relationships,
    source: :followed

  has_one_attached :propic
end

json.extract! user, :id, :username, :bio, :full_name, :image_ids, :followed_image_ids, :comment_ids

hash = {}

if user.propic.attached?
    json.propicUrl url_for(user.propic)
  else
    json.propicUrl nil
end

json.followed_ids hash

json.followed_ids do
    user.followed_relationships.each do |follow|
        json.set! follow.followed_id, follow.id
    end
end

json.follower_ids hash

json.follower_ids do
    user.follower_relationships.each do |follow|
        json.set! follow.follower_id, follow.id
    end
end

json.liked_image_ids hash

json.liked_image_ids do
    user.likes.each do |like|
        json.set! like.image_id, like.id
    end
end


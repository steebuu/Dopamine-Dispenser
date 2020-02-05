json.extract! user, :id, :username, :bio, :full_name, :image_ids, :follower_ids
json.followed_ids do
    user.followed_relationships.each do |follow|
        json.set! follow.followed_id, follow.id
    end
end

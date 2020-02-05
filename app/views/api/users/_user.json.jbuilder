json.extract! user, :id, :username, :bio, :full_name, :image_ids, :follower_ids, :followed_ids
json.followed_relationships_ids do
    user.followed_relationships.each do |follow|
        json.set! follow.followed_id do
            json.extract! follow, :id
        end
    end
end

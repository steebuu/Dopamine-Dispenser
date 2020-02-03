json.follow do
    json.set! @follow.id do
        json.extract @follow, :id, :follower_id, :followed_id
    end
end
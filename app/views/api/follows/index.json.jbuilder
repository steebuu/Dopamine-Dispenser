json.array! @follows do |follow|
    json.extract! follow, :follower_id, :followed_id
end
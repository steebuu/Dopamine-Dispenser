json.extract! image, :id, :user_id, :caption, :created_at, :comment_ids
json.user image.user.username
json.photoUrl url_for(image.photo)

hash = {}

json.liked_by_ids hash

json.liked_by_ids do
    image.likes.each do |like|
        json.set! like.user_id, like.id
    end 
end
json.extract! image, :id, :user_id, :caption, :created_at
json.user image.user.username
json.photoUrl url_for(image.photo)

json.liked_by_ids do
    image.likes.each do |like|
        json.set! like.user_id, like.id
    end 
end
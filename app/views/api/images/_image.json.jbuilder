json.extract! image, :id, :user_id, :caption, :created_at
json.user image.user.username
json.photoUrl url_for(image.photo)
json.extract! image, :id, :user_id, :caption, :like_ids, :created_at
json.user image.user.username
json.photoUrl url_for(image.photo)
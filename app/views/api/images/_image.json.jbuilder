json.extract! image, :id, :user_id, :caption
json.user image.user.username
json.photoUrl url_for(image.photo)
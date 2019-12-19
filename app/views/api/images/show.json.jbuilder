json.extract! @image, :id, :user_id, :caption
json.photoUrl url_for(@image.photo)


json.array! @images do |image|
  json.extract! post, :id, :caption
  json.photoUrl url(image.photo)
end
# json.partial! "/api/users/user", user: @user

  # debugger
# json.user do
#   json.set! @user.id, :id, :username, :bio, :full_name, :image_ids
# end
  json.extract! @user, :id, :username, :bio, :full_name, :image_ids

json.images do  
  @user.images.each do |image|
    json.set! image.id do
      json.extract! image, :user_id, :caption
    end 
  end
end


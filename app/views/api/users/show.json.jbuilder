# json.partial! "/api/users/user", user: @user

  # debugger
# json.user do
#   json.set! @user.id, :id, :username, :bio, :full_name, :image_ids
# end
json.user do 
  json.set! @user.id do 
    json.extract! @user, :id, :username, :bio, :full_name, :image_ids, :followed_ids, :follower_ids
    if @user.propic.attached?
      json.propicUrl url_for(@user.propic)
    else
      json.propicUrl nil
    end
  end
end

if @user.images
  json.images do  
    @user.images.each do |image|
      json.set! image.id do
        json.extract! image, :id, :user_id, :caption
        json.photoUrl url_for(image.photo)
      end 
    end
  end
end


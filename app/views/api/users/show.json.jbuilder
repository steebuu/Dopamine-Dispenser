json.user do 
  json.set! @user.id do 
    json.partial! "/api/users/user", user: @user
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


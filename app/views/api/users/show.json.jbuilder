json.user do 
  json.set! @user.id do 
    json.partial! "/api/users/user", user: @user
  end
end

if @user.images
  json.images do  
    @user.images.each do |image|
      json.set! image.id do
        json.partial! "/api/images/image", image: image
      end 
    end
  end
end

if @user.follower_relationships
  json.follows do
    @user.follower_relationships.each do |follow|
      json.set! follow.id do
        json.extract! follow, :id, :follower_id, :followed_id
      end
    end
    @user.followed_relationships.each do |follow|
      json.set! follow.id do
        json.extract! follow, :id, :follower_id, :followed_id
      end
    end
  end
end
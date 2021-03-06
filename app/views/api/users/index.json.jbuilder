# json.array! @users do |user|
#     json.partial! "/api/users/user", user: user
#     if user.propic.attached?
#         json.propicUrl url_for(@user.propic)
#       else
#         json.propicUrl nil
#     end
# end

@users.each do |user|
    json.set! user.id do
        json.partial! 'api/users/user', user: user
    end
end

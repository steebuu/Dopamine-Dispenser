json.array! @likes do |like|
    json.partial! "api/likes/like", like: like
end
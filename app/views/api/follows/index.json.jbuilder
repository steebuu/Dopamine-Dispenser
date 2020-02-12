json.array! @follows do |follow|
    json.partial! "api/follows/follow", follow: follow
end
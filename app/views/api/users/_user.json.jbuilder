json.extract! user, :id, :email, :username
json.tracks do
    json.array! user.tracks, :id
end
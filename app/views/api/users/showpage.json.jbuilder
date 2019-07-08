json.user do 
    json.partial! '/api/users/user', user: @user
    json.tracks @user.tracks.pluck(:id)
end

json.tracks do
    json.array! @user.tracks
end
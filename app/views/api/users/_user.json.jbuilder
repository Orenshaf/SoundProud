json.extract! user, :id, :username
if user.photo.attached? 
    json.photoUrl url_for(user.photo)
else
    json.photoUrl image_url('default-profile-photo.png')
end

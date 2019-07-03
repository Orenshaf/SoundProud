json.extract! track, :id, :title, :private, :user_id, :description, :created_at, :comments
json.trackUrl url_for(track.track_file)
if track.photo.attached? 
    json.photoUrl url_for(track.photo)
else
    json.photoUrl image_url('default-photo.png')
end
json.comments track.comments.pluck(:id)
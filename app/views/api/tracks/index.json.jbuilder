json.array! @tracks do |track|
    json.extract! track, :id, :title, :user_id
    json.trackUrl url_for(track.track_file)
    if track.photo.attached? 
        json.photoUrl url_for(track.photo)
    else
        json.photoUrl image_url('default-photo.png')
    end
end
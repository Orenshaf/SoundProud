json.extract! track, :id, :title, :private, :user_id, :track_file
json.trackUrl url_for(track.track_file)
json.photoUrl url_for(track.photo)
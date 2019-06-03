json.array! @tracks do |track|
    json.extract! track, :id, :title, :private, :user_id
    json.trackUrl url_for(track.track_file)
end
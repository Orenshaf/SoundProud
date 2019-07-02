json.array! @comments do |comment|
    json.extract! comment, :id, :body, :track_time
end
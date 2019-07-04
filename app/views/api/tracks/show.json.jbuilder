json.track do
    json.partial! '/api/tracks/track', track: @track
end

json.user do
    json.partial! '/api/users/user', user: @track.user
end

json.comments do 
    json.array! @track.comments do |comment|
        json.partial! 'api/comments/comment', comment: comment
    end
end

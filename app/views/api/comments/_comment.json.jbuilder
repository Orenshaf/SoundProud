json.extract! comment, :id, :body, :track_time, :created_at, :username, :user_id, :track_id
json.childComments comment.child_comments.pluck(:id)


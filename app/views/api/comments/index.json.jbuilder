json.array! @comments do |comment|
    json.extract! comment, :id, :body, :track_time, :created_at, :username, :user_id, :track_id, :parent_cmt_id
    json.childComments comment.child_comments.pluck(:id)
end
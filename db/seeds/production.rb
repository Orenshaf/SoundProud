100.times do
    parentComment = Comment.where("parent_cmt_id IS NULL").sample
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: parentComment.track_id,
        track_time: parentComment.track_time,
        parent_cmt_id: parentComment.id
    )
end


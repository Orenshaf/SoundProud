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

# Comment.where("parent_cmt_id IS NULL").pluck(:id).sample

# 00:
# < 20 sec
# [15, 19, 20, 21, 36]
########

# 01:
# < 40 sec
# [22, 7]
##########

# 02:
# < 40 sec
# [4, 34, 33]
#########

# 03:
# < 10 sec
# [12]
# < 40 sec 
# [9, 39, 31, 11]
############

# 04:
# 40 sec 
# [37, 38, 14]
###########

# 05: 
# 40 sec
# [5]
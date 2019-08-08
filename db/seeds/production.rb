50.times do
    array = [15, 19, 20, 21, 36]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "00"+ ":" + rand(2).to_s + rand(10).to_s
    )
end

20.times do
    array = [22, 7]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "0" + rand(2).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end

30.times do
    array = [4, 34, 33]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "0" + rand(3).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end

10.times do
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: 12,
        track_time: "0" + rand(4).to_s + ":0" + rand(10).to_s
    )
end

40.times do
    array = [9, 39, 31, 11]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "0" + rand(4).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end

40.times do
    array = [9, 39, 31, 11]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "0" + rand(5).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end

40.times do
    array = [9, 39, 31, 11]
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: array.sample,
        track_time: "0" + rand(6).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end
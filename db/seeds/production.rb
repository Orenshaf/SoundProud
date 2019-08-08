10.times do
    Comment.create(
        user_id: User.pluck(:id).sample,
        body: Faker::GreekPhilosophers.quote,
        track_id: 5,
        track_time: "0" + rand(6).to_s + ":" + rand(4).to_s + rand(10).to_s
    )
end


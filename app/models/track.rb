# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  private     :boolean          default(FALSE)
#  user_id     :integer          not null
#  genre       :string
#  tags        :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :string
#

class Track < ApplicationRecord
    validates :title, presence: true

    has_one_attached :track_file
    has_one_attached :photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    has_many :comments,
        primary_key: :id,
        foreign_key: :track_id,
        class_name: 'Comment'
end

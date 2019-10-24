# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  profile_url     :string
#  age             :integer
#  gender          :string
#

class User < ApplicationRecord 
    validates :username, :password_digest, presence: true
    validates :email, presence: true, uniqueness: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :profile_url, presence: true, uniqueness: true
    validates :age, presence: true
    validates :gender, presence: true;

    attr_reader :password

    after_initialize :ensure_session_token, :ensure_profile_url

    has_one_attached :photo
    
    has_many :tracks,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'Track'

    has_many :comments,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'Comment'
    
    has_many :likes, as: :likable

    has_many :liked_tracks, through: :likes

    has_many :liked_users, through: :likes

    def self.find_by_credentials(loginInfo, password)
        user = User.find_by(email: loginInfo) || User.find_by(profile_url: loginInfo)
        (user && user.is_password?(password)) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password

        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_profile_url
        profile_url = rand.to_s[2..10]
        self.username = nil if self.username.length == 0
        self.profile_url ||= 'user-' + profile_url
        self.username ||= 'user-' + profile_url
    end

end

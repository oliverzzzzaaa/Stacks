class User < ApplicationRecord
    attr_reader :password
    validates :username, :session_token, :email, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    
    has_many :workspace_assignments,
    foreign_key: :user_id,
    class_name: :WorkspaceAssignment

    has_many :workspaces,
    through: :workspace_assignments,
    source: :workspace

    has_many :messages

    has_many :channel_memberships,
    foreign_key: :user_id,
    class_name: :ChannelMembership

    has_many :channels,
    through: :channel_memberships,
    source: :channel

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password) 
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end

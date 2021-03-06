class Channel < ApplicationRecord

    validates :channel_name, presence: true, uniqueness: true
    validates :host_id, :workspace_id, :private_message, presence: true

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    belongs_to :workspace

    has_many :messages

    has_many :channel_memberships,
    foreign_key: :channel_id,
    class_name: :ChannelMembership

    has_many :users,
    through: :channel_memberships,
    source: :user
end

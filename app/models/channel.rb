class Channel < ApplicationRecord

    validates :channel_name, presence: true, uniqueness: true
    validates :host_id, :workspace_id, :private_message, presence: true

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    belongs_to :workspace

    has_many :messages
end

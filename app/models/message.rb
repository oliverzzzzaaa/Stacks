class Message < ApplicationRecord

    validates :body, :user_id, :workspace_id, presence: true

    belongs_to :workspace

    belongs_to :user
end

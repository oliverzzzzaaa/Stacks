class WorkspaceAssignment < ApplicationRecord
    validates :user_id, uniqueness: { scope: :workspace_id }

    belongs_to :user

    belongs_to :workspace
end

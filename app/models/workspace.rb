class Workspace < ApplicationRecord
    validates :host_id, presence: true
    validates :workspace_name, presence: true, uniqueness: true

    belongs_to :host,
    foreign_key: :host_id,
    class_name: :User

    has_many :workspace_assignments,
    foreign_key: :workspace_id,
    class_name: :WorkspaceAssignment

    has_many :users,
    through: :workspace_assignments,
    source: :user


    def self.find_by_name(name)
        workspace = Workspace.find_by(name: name)
        return workspace
    end
end

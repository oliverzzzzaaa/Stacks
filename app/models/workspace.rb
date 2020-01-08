class Workspace < ApplicationRecord
    validates :host_id, presence: true
    validates :workspace_name, presence: true, uniqueness: true

    belongs_to :host,
    foreign_key: :host_id,
    class: :User

    def self.find_by_name(name)
        workspace = Workspace.find_by(name: name)
        return workspace
    end
end

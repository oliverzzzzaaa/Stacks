json.set! @workspace.id do
    json.extract! @workspace, :id, :workspace_name
    json.members do
        @workspace.users.each do |user|
            json.set! user.id do
                json.extract! user, :id, :name
            end
        end
    end
end
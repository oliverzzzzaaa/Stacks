
@workspace.users.each do |user|
    json.users do
        json.set! user.id do
            json.extract! user, :id, :name 
        end
    end
end

# json.partial! "api/workspaces/workspace", workspace: @workspace

json.workspace do 
    json.partial! '/api/workspaces/workspace', workspace: @workspace
end
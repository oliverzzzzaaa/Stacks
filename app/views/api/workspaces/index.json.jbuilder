@workspaces.each do |workspace|
    json.set! workspace.workspace_name do 
        json.extract! workspace, :id, :workspace_name
    end
end
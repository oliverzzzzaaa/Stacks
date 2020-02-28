
json.extract! @user, :id, :username, :email, :name
json.workspaces do 
    @user.workspaces.each do |workspace|
        json.partial! "api/workspaces/workspace", workspace: workspace
    end
end




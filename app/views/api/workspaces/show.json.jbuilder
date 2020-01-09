json.extract! @workspace, :id, :name

json.partial! "api/workspaces/workspace", workspace: @user
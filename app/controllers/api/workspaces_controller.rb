class Api::WorkspacesController < ApplicationController

    def show
        @workspace = Workspace.find_by_name(params[:workspace][:name])
        if @workspace
            render '/api/workspaces/show'
        else
            render json: ["Sorry, workspace not found"], status: 401
        end
    end

    private
    def workspace_params
        params.require(:workspace).permit(:name)
    end

end

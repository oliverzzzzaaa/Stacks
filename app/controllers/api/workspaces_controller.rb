class Api::WorkspacesController < ApplicationController

    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            render '/api/workspaces/show'
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def show
        # @workspace = Workspace.find_by_name(params[:workspace][:name])
        @workspace = Workspace.find(params[:id])
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

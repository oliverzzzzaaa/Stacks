class Api::WorkspacesController < ApplicationController

    def index
        if current_user
            @workspace_assignments = WorkspaceAssignment.where(user_id: current_user.id)
            @workspaces = [];
            @workspace_assignments.each do |workspace_assignment|
                @workspaces << Workspace.find(workspace_assignment.workspace_id)
            end
        else
            @workspaces = Workspace.all
        end
        render :index
    end 

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

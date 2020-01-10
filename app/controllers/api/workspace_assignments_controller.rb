class WorkspaceAssignmentsController < ApplicationController

    def show
        
        @workspaces = WorkspaceAssignments.find_by!(user_id: params[:user_id])
        if @workspaces
            render json: '/api/workspace_assignments/show'
        else
            render json: ["Sorry, no workspaces found"], status: 401
        end
    end

    def create

    end

end

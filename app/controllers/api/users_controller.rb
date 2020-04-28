class Api::UsersController < ApplicationController


    def create
        @user = User.new(user_params)
        if @user.save
            @first_workspace = WorkspaceAssignment.new(
                user_id: @user.id, workspace_id: Workspace.find_by(workspace_name: "HR").id)
            @first_workspace.save
            @first_channel = ChannelMembership.new(
                user_id: @user.id,
                channel_id: Channel.find_by(channel_name: "HR General").id
            )
            @first_channel.save
            login(@user)
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update_attributes(user_params)
            render "/api/users/show"
        else
            render json: @user.errors.full_message, status: 422
        end
    end



    private
    def user_params
        params.require(:user).permit(:username, :password, :name, :email)    
    end
end

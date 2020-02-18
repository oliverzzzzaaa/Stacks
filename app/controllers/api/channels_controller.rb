class Api::ChannelsController < ApplicationController

    def index
        # @channel_memberships = ChannelMembership.where(user_id: current_user.id)
        # @channels = [];
        # @channel_memberships.each do |channel_membership|
        #     @channels << Channel.find(channel_membership.channel_id)
        # end
        @channels = Channel.all
        render :index
    end

    def show
        @messages = Channel.includes(:messages).find(params[:id]).messages
        @channel = Channel.find(params[:id])
    end 

    def create
        @channel = Channel.new(channel_params)
        @channel.host_id = current_user.id
        # @message.workspace_id = Workspace.find_by(workspace_name: "App-Academy").id
        if @channel.save
            cMembership = ChannelMembership.new(
                user_id: current_user.id,
                channel_id: @channel.id
            )
            if cMembership.save
                render :show
            else
                render json: @message.errors.full_messages, status: 422
            end
        else
            render json: @message.errors.full_messages, status: 422
        end
    end
    
    # def destroy

    # end

    def channel_params
        params.require(:channel).permit(:channel_topic, :private_message, :workspace_id, :host_id, :channel_name)
    end
end

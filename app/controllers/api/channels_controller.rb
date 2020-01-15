class Api::ChannelsController < ApplicationController

    def index
        @channel_memberships = ChannelMembership.where(user_id: current_user.id)
        @channels = [];
        @channel_memberships.each do |channel_membership|
            @channels << Channel.find(channel_membership.channel_id)
        end
        render :index
    end

    def show
        p params[:id]
        @messages = Channel.includes(:messages).find(params[:id]).messages
        @channel = Channel.find(params[:id])
    end 

    # def create

    # end
    
    # def destroy

    # end

    def channel_params
        params.require(:channel).permit(:channel_topic, :private_message, :workspace_id, :host_id, :channel_name)
    end
end

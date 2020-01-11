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
        @channel = Channel.find(params[:id])
    end 

    # def create

    # end
    
    # def destroy

    # end
end

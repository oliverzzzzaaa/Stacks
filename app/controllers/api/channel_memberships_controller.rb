class Api::ChannelMembershipsController < ApplicationController

    def create
        # if (ChannelMembership.where(user_id: params[user_id], channel_id: params[channel_id]))
        @channel_membership = ChannelMembership.new(channel_membership_params)
        if @channel_membership.save
            @channel_memberships = ChannelMembership.where(user_id: current_user.id)
            render "/api/channel_memberships/index"
        else
            render json: @channel_membership.errors.full_messages, status: 422
        end
    end

    def index
        @channel_memberships = ChannelMembership.where(user_id: current_user.id)
        render "/api/channel_memberships/index"
    end

    # def destroy
    # end

    private
    def channel_membership_params
        params.require(:channel_membership).permit(:user_id, :channel_id)
    end
end

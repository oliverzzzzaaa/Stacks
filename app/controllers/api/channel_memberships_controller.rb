class Api::ChannelMembershipsController < ApplicationController

    def create
        @channel_membership = ChannelMembership.new(channel_membership_params)
        if @channel_membership.save
            # @channels = Channel.all
            @user = current_user
            render "/api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def channel_membership_params
        params.require(:channel_membership).permit(:user_id, :channel_id)
    end
end

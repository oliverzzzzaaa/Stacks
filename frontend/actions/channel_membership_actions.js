import * as APIUtil from '../util/channel_membership_api_util'

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";

const receiveChannelMemberships = (memberships) => ({
    type: RECEIVE_MEMBERSHIPS,
    memberships
})

export const fetchChannelMemberships = () => dispatch => (
    APIUtil.newChannelMembership(userId)
        .then((memberships) => dispatch(receiveChannelMemberships(memberships)))
)

export const joinChannel = (data) => dispatch => (
    APIUtil.newChannelMembership(data)
        .then((channels) => dispatch(receiveChannels(channels)))
) 


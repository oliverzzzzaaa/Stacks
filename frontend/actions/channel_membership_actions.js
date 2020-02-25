import * as APIUtil from '../util/channel_membership_api_util'

export const RECEIVE_MEMBERSHIPS = "RECEIVE_MEMBERSHIPS";

const receiveChannelMemberships = (memberships) => ({
    type: RECEIVE_MEMBERSHIPS,
    memberships
})
    
export const fetchChannelMemberships = () => dispatch => (
    APIUtil.newChannelMembership()
        .then((memberships) => dispatch(receiveChannelMemberships(memberships)))
)


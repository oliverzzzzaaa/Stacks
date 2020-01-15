import * as APIUtil from '../util/channel_api_util'

export const RECEIVE_CHANNELS = "RECEIVE_CHANNELS";
export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";


const receiveChannels = (channels) => ({
    type: RECEIVE_CHANNELS,
    channels
})

const receiveChannel = channel => ({
    type: RECEIVE_CHANNEL,
    channel
})

export const fetchChannel = (channelId) => dispatch => (
    APIUtil.fetchChannel(channelId)
        .then((channel) => dispatch(receiveChannel(channel)))
)

export const fetchChannels = () => dispatch => (
    APIUtil.fetchChannels()
        .then((channels) => dispatch(receiveChannels(channels)))
)




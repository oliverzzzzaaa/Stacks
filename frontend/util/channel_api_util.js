export const newChannel = (channel) => (
    $.ajax({
        method: "POST",
        url: '/api/channels',
        data: {channel}
    })
)

export const fetchChannel = channelId => (
    $.ajax({
        method: "GET",
        url: `/api/channels/${channelId}`
    })
)

export const fetchChannels = () => (
    $.ajax({
        method: "GET",
        url: '/api/channels'
    })
)
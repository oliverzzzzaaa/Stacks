export const newChannelMembership = (userId) => (
    $.ajax ({
        method: "POST",
        url: '/api/channel_memberships',
        data: {userId}
    })
)

export const fetchMemberships = () => (
    $.ajax ({
        method: "GET",
        url: '/api/channel_memberships',
    })
)

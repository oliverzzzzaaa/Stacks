export const newChannelMembership = (channel_membership) => (
    $.ajax ({
        method: "POST",
        url: '/api/channel_memberships',
        data: {channel_membership}
    })
)

export const fetchMemberships = () => (
    $.ajax ({
        method: "GET",
        url: '/api/channel_memberships',
    })
)

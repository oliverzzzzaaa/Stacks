export const newChannelMembership = (data) => (
    $.ajax ({
        method: "POST",
        url: '/api/channel_memberships',
        data: {data}
    })
)

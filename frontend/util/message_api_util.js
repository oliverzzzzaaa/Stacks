export const postMesage = (message) => (
    $.ajax({
        method: "POST",
        url: "/api/messages",
        data: {message}
    })
)

export const deleteMessage = (messageId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/messages/${messageId}`
    })
)

export const updateMessage = message => (
    $.ajax({
        url: `/api/messages/${message.id}`,
        method: "PATCH",
        data: {message}
    })
)

export const fetchMessages = () => (
    $.ajax({
        url: "/api/messages",
        method: "GET"
    })
)
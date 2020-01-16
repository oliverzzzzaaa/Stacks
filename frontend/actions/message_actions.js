import * as APIUtil from '../util/message_api_util'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"


const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

const removeMessage = messageId => ({
    type: REMOVE_MESSAGE,
    messageId
})

const actioncableMessage = message => ({
    type: RECEIVE_MESSAGE,
    message
})


export const receiveMessage = message => dispatch => (
    (message) => dispatch(actioncableMessage(message))
)


export const postMessage = message => dispatch => (
    APIUtil.postMesage(message)
        .then((messages) => dispatch(receiveMessages(messages))
        , error => (dispatch(receiveErrors(error.responseJSON))))
)

export const updateMessage = message => dispatch => (
    APIUtil.updateMessage(message)
    .then((messages) => dispatch(receiveMessages(messages))
    , error => (dispatch(receiveErrors(error.responseJSON))))
)

export const deleteMessage = messageId => dispatch => (
    APIUtil.deleteMessage(messageId)
    .then((messageId) => dispatch(removeMessage(messageId))
    , error => (dispatch(receiveErrors(error.responseJSON))))
)

export const fetchMessages = () => dispatch => (
    APIUtil.fetchMessages()
        .then((messages) => dispatch(receiveMessages(messages)))
)

import {RECEIVE_MESSAGES, REMOVE_MESSAGE, RECEIVE_MESSAGE} from '../actions/message_actions';


const messagesReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch (action.type) {
        case REMOVE_MESSAGE: 
            delete newState[action.messageId]
            return newState
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message})
        default:
            return state;
    }
}

export default messagesReducer

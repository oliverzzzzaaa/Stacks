import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_WORKSPACE} from '../actions/workspace_actions'


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors
        case RECEIVE_CURRENT_USER:
            return [];
        case RECEIVE_WORKSPACE:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer

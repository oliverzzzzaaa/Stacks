import {RECEIVE_WORKSPACES} from '../actions/workspace_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_WORKSPACES:
            return action.workspaces;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default workspacesReducer
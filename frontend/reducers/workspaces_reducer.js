import {RECEIVE_WORKSPACES, RECEIVE_WORKSPACE} from '../actions/workspace_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const workspacesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_WORKSPACES:
            return action.workspaces;
        case RECEIVE_WORKSPACE:
            return Object.assign({}, state, {[action.workspace.id]: action.workspace})
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default workspacesReducer
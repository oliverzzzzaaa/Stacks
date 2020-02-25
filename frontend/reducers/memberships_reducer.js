import {RECEIVE_MEMBERSHIPS} from '../actions/channel_membership_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';

const membershipsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_MEMBERSHIPS:
            return action.memberships
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default membershipsReducer
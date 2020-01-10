import {combineReducers} from 'redux'
import usersReducer from './users_reducer'
import messagesReducer from './messages_reducer'
import workspacesReducer from './workspaces_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    messages: messagesReducer,
    workspaces: workspacesReducer
})

export default entitiesReducer
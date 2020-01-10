import * as APIUtil from '../util/workspace_api_util'

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";


const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

export const fetchWorkspaces = () => dispatch => (
    APIUtil.fetchWorkspaces()
        .then((workspaces) => dispatch(receiveWorkspaces(workspaces)))
)

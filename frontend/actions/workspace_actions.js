import * as APIUtil from '../util/workspace_api_util'

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";


const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

const receiveWorkspace = (workspace) => ({
    type:RECEIVE_WORKSPACE,
    workspace
})

export const fetchWorkspaces = () => dispatch => (
    APIUtil.fetchWorkspaces()
        .then((workspaces) => dispatch(receiveWorkspaces(workspaces)))
)

export const fetchWorkspace = (workspace) => dispatch => (
    APIUtil.fetchWorkspace(workspace)
        .then((workspace) => dispatch(receiveWorkspace(workspace)))
)

export const searchWorkspace = (workspaceName) => dispatch => (
    APIUtil.searchWorkspace(workspaceName)
        .then((workspace) => dispatch(receiveWorkspace(workspace)))
)

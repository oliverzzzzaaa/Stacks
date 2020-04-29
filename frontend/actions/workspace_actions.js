import * as APIUtil from '../util/workspace_api_util'

export const RECEIVE_WORKSPACES = "RECEIVE_WORKSPACES";
export const RECEIVE_WORKSPACE = "RECEIVE_WORKSPACE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveWorkspaces = (workspaces) => ({
    type: RECEIVE_WORKSPACES,
    workspaces
})

const receiveWorkspace = (workspace) => ({
    type: RECEIVE_WORKSPACE,
    workspace
})

export const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
  });

export const fetchWorkspaces = () => dispatch => (
    APIUtil.fetchWorkspaces()
        .then((workspaces) => dispatch(receiveWorkspaces(workspaces)))
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
          })
)

export const fetchWorkspace = (workspace) => dispatch => (
    APIUtil.fetchWorkspace(workspace)
        .then((workspace) => dispatch(receiveWorkspace(workspace)))
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
          })
)

export const searchWorkspace = (workspaceName) => dispatch => (
    APIUtil.searchWorkspace(workspaceName)
        .then((workspace) => dispatch(receiveWorkspace(workspace)))
        .catch(err => {
            console.log(err)
            dispatch(receiveErrors(err.response.data));
          })
)

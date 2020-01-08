export const newWorkspace = (workspace) => (
    $.ajax({
        method: "POST",
        url: '/api/workspaces',
        data: {workspace}
    })
)

export const fetchWorkspace = workspaceId => (
    $.ajax({
        method: "GET",
        url: `/api/workspaces/${workspaceId}`
    })
)

export const fetchWorkspaces = () => (
    $.ajax({
        method: "GET",
        url: '/api/workspaces'
    })
)
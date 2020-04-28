export const newWorkspace = (workspace) => (
    $.ajax({
        method: "POST",
        url: '/api/workspaces',
        data: {workspace}
    })
)

export const fetchWorkspace = workspace => (
    $.ajax({
        method: "GET",
        url: `/api/workspaces/${workspace.id}`
    })
)

export const fetchWorkspaces = () => (
    $.ajax({
        method: "GET",
        url: '/api/workspaces'
    })
)

export const searchWorkspace = workspaceName => (
    $.ajax({
        method: "GET",
        url: '/api/workspacesearch',
        data: {
            name: workspaceName
        }
    })
)
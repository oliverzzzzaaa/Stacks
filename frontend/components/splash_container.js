import {connect} from 'react-redux';
import SplashPage from './splash'
import {receiveCurrentUser} from '../actions/session_actions'
import {logout} from '../actions/session_actions'
import { fetchWorkspaces, fetchWorkspace, searchWorkspace } from '../actions/workspace_actions'
import {fetchChannels} from '../actions/channel_actions'
import {fetchChannelMemberships} from '../actions/channel_membership_actions'

const mapStateToProps = state => {
    return {
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    workspaces: Object.values(state.entities.workspaces),
    channels: Object.values(state.entities.channels)
}}

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    action: () => dispatch(logout()),
    fetchWorkspace: (workspace) => dispatch(fetchWorkspace(workspace)),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchChannelMemberships: () => dispatch(fetchChannelMemberships()),
    searchWorkspace: (workspaceName) => dispatch(searchWorkspace(workspaceName))
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)


import {connect} from 'react-redux';
import Main from './main'
import {receiveCurrentUser, logout, updateUser} from '../../actions/session_actions';   
import {fetchMessages, deleteMessage} from '../../actions/message_actions'
import {fetchWorkspaces} from '../../actions/workspace_actions';
import {fetchChannels, joinChannel} from '../../actions/channel_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    channels: Object.values(state.entities.channels),
    workspaces: Object.values(state.entities.workspaces),
    memberships: Object.values(state.entities.memberships)
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    fetchChannels: (channels) => dispatch(fetchChannels(channels)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
    updateUser: (user) => dispatch(updateUser(user)),
    joinChannel: (data) => dispatch(joinChannel(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
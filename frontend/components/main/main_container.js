import {connect} from 'react-redux';
import Main from './main'
import {receiveCurrentUser, logout} from '../../actions/session_actions';   
import {fetchMessages} from '../../actions/message_actions'
import {fetchWorkspaces} from '../../actions/workspace_actions';
import {fetchChannels} from '../../actions/channel_actions'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
    fetchMessages: (messages) => dispatch(fetchMessages(messages)),
    fetchWorkspaces: (workspaces) => dispatch(fetchWorkspaces(workspaces)),
    fetchChannels: (channels) => dispatch(fetchChannels(channels))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
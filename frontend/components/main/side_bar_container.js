import SideBar from './side_bar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../../actions/session_actions'
import {fetchChannelMemberships} from '../../actions/channel_membership_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    workspaces: Object.values(state.entities.workspaces),
    channels: Object.values(state.entities.channels),
    memberships: Object.values(state.entities.memberships)
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    fetchChannelMemberships: () => dispatch(fetchChannelMemberships()),
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
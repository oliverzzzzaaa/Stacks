import SideBar from './side_bar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {logout} from '../../actions/session_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    workspaces: Object.values(state.entities.workspaces),
    channels: Object.values(state.entities.channels)
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
import SideBar from './side_bar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {fetchWorkspaces} from '../../actions/workspace_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    workspaces: Object.values(state.entities.workspaces)
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
    fetchMessages: (messages) => dispatch(fetchMessages(messages)),
    fetchWorkspaces: (workspaces) => dispatch(fetchWorkspaces(workspaces))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
import {connect} from 'react-redux';
import SplashPage from './splash'
import {receiveCurrentUser} from '../actions/session_actions'
import {logout} from '../actions/session_actions'
import { fetchWorkspaces } from '../actions/workspace_actions'

const mapStateToProps = state => {
    return {
    currentUser: state.entities.users,
    currentUserId: state.session.id,
    workspaces: Object.values(state.entities.workspaces)
}}

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    action: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)


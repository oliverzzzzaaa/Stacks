import {connect} from 'react-redux';
import SplashPage from './splash'
import {receiveCurrentUser} from '../actions/session_actions'
import {logout} from '../actions/session_actions'

const mapStateToProps = state => {
    return {
    currentUser: state.entities.users,
    currentUserId: state.session.id
}}

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    action: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(SplashPage)


import {connect} from 'react-redux';
import Main from './main'
import {receiveCurrentUser, logout} from '../../actions/session_actions';   
import {fetchMessages} from '../../actions/message_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
    fetchMessages: (messages) => dispatch(fetchMessages(messages))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
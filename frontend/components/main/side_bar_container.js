import SideBar from './side_bar'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

const mapStateToProps = state => ({
    currentUser: state.entities.users,
    currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    logout: () => dispatch(logout()),
    fetchMessages: (messages) => dispatch(fetchMessages(messages))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar))
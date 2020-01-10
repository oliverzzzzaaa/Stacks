import SideBar from './side_bar'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    // currentUser: state.entities.users,
    // currentUserId: state.session.id
})

const mapDispatchToProps = dispatch => ({
    // receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user)),
    // logout: () => dispatch(logout()),
    // fetchMessages: (messages) => dispatch(fetchMessages(messages))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
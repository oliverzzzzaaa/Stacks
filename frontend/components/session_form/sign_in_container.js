import SignInForm from './sign_in_form'
import { login } from '../../actions/session_actions'
import { connect } from 'react-redux'
import {fetchMessages} from '../../actions/message_actions'
import {fetchChannelMemberships} from '../../actions/channel_membership_actions'


//pass in the workspace
const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    userform: {email: '', password: ''}
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user)),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchChannelMemberships: () => dispatch(fetchChannelMemberships())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)


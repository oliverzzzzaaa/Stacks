import SignInForm from './sign_in_form'
import { login } from '../../actions/session_actions'
import { connect } from 'react-redux'
import {fetchMessages} from '../../actions/message_actions'


//pass in the workspace
const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    userform: {email: '', password: ''}
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user)),
    fetchMessages: () => dispatch(fetchMessages())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)


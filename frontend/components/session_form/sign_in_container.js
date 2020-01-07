import SignInForm from './sign_in_form'
import { login } from '../../actions/session_actions'
import { connect } from 'react-redux'


//pass in the workspace
const mapStateToProps = state => ({
    userform: {email: '', password: ''}
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)


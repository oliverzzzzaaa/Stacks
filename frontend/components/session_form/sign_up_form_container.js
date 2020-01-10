import SignUpForm from './sign_up_form'
import {connect} from 'react-redux'
import {signup} from '../../actions/session_actions'

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    user: {username: '', password: '', email: '', name: ''}
})

const mapDispatchToProps = dispatch => ({
    action: (user) => dispatch(signup(user))
})



export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
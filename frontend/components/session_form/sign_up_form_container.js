import SignUpForm from './sign_up_form'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    user: {username: '', password: '', email: '', name: ''}
})

const mapDispatchToProps = dispatch => ({

})



export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
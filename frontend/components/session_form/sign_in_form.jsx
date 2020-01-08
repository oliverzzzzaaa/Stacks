import React from 'react'
import {NavLink} from 'react-router-dom'

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.userform
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    render() {
        return(
            <div className="signInPage">
                    <div className="slack-logo-div">
                        <NavLink to='/' className="splash-nav-dropdowns">
                            <img src={window.iconSlack} className="slack-logo"/>
                        </NavLink>
                    </div>
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <h2 className="signInWelcome">Sign In to SampleWorkspace</h2>
                    <h4 className="signInWelcome">Enter your email address and password</h4>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.updateField('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.updateField('password')}/>
                    </label>
                    <button className="signInButton" type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}

export default SignInForm
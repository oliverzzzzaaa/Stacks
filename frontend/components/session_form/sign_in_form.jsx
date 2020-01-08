import React from 'react'
import {NavLink} from 'react-router-dom'

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.userform
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDefaultUser = this.handleDefaultUser.bind(this)
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    handleDefaultUser(e) {
        e.preventDefault();
        this.setState({
            email: "DemoUser1@aa.io",
            password: "DemoUser1",
        }, () => {
            document.getElementById("sign-in-button").click()
        })
    }

    render() {
        return(
            <div className="signInPage">  
                <div className="signin-header">
                    <div>
                        <div className="slack-logo-div-signin">
                            <NavLink to='/' className="splash-nav-dropdowns">
                                <img src={window.iconSlack} className="slack-logo"/>
                            </NavLink>
                        </div>
                    </div>
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
                    <button className="signInButton" id="sign-in-button" type="submit">Sign In</button>
                    <button className="signInButton" id="demo-user-button" onClick={this.handleDefaultUser}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default SignInForm
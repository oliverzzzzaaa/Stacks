import React from 'react'
import {NavLink} from 'react-router-dom'

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.userform
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDefaultUser = this.handleDefaultUser.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state).then(
            () => this.props.fetchMessages())
    }

    renderErrors() {
        return(
          <ul className="errors-ul">
            {this.props.errors.map((error, i) => (
              <li key={`error-${i}`} className="error-message">
                {error}
              </li>
            ))}
          </ul>
        );
      }

    handleDefaultUser(e) {
        e.preventDefault();
        this.setState({
            email: "DemoUser1@aa.io",
            password: "DemoUser1",
        }, () => {
            this.handleSubmit()
            // document.getElementById("sign-in-button").click()
        })
    }

    render() {
        return(
            <div className="signInPage">  
                <section className="splash-header">
                    {/* <button className="splash-button">Sign In</button>
                    <button className="splash-button">Sign Up</button> */}
                    <section className="header-left">
                        <div className="slack-logo-div">
                            <NavLink to='/' className="splash-nav-dropdowns">
                                <img src={window.iconSlack} className="slack-logo"/>
                            </NavLink>
                        </div>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Why Slack?</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Solutions</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Resources</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Enterprise</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Pricing</NavLink>
                    </section>
                    <section className="header-right">
                        <NavLink to='/session/new' className="splash-new-session-link">Sign In</NavLink>
                        <NavLink to="/users/new" className="splash-button-link">SignUp</NavLink>
                    </section>
                </section>
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <h2 className="signInWelcome">Sign In to SampleWorkspace</h2>
                    <h4 className="signInWelcome">Enter your email address and password</h4>
                    {this.renderErrors()}
                    <input type="text" value={this.state.email} onChange={this.updateField('email')} className="signin-input" placeholder="Email:"/>
                    <input type="password" value={this.state.password} onChange={this.updateField('password')} className="signin-input" placeholder="Password:"/>
                    <button className="signInButton" id="sign-in-button" type="submit">Sign In</button>
                    <button className="signInButton" id="demo-user-button" onClick={this.handleDefaultUser}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default SignInForm
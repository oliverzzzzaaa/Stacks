import React from 'react';
import { NavLink } from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }
    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
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


    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
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
                        {/* <NavLink to='/users/new' className="splash-nav-dropdowns">Why Slack?</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Solutions</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Resources</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Enterprise</NavLink>
                        <NavLink to='/users/new' className="splash-nav-dropdowns">Pricing</NavLink> */}
                    </section>
                    <section className="header-right">
                        <NavLink to='/session/new' className="splash-new-session-link">Sign In</NavLink>
                        <NavLink to="/users/new" className="splash-button-link">SignUp</NavLink>
                    </section>
                </section>
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <h2 className="signInWelcome">Choose your login details</h2>
                    {this.renderErrors()}
                    <label>Username 
                        <input type="text" value={this.state.username} onChange={this.updateField('username')}/>
                    </label>
                    <label>Email 
                        <input type="text" value={this.state.email} onChange={this.updateField('email')}/>
                    </label>
                    <label>Password 
                        <input type="password" value={this.state.password} onChange={this.updateField('password')}/>
                    </label>
                    <label>Name 
                        <input type="text" value={this.state.name} onChange={this.updateField('name')}/>
                    </label>
                    <button className="signInButton" type="submit">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUpForm
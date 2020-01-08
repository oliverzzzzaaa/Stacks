import React from 'react';
import { NavLink } from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.user
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
                    <h2 className="signInWelcome">Choose your login details</h2>
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
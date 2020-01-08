import React from 'react';
import {NavLink} from 'react-router-dom';


class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.workspaceform
    }
    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/session/workspace/new')
    }

    render() {
        return(
            <div className="sign-in-workspace-page">
                <div className="slack-logo-div">
                    <NavLink to='/' className="splash-nav-dropdowns">
                        <img src={window.iconSlack} className="slack-logo"/>
                    </NavLink>
                </div>
                <form onSubmit={this.handleSubmit} className="signInForm">
                    <h2 className="signInWelcome">Sign in to your workspace</h2>
                    <h4 className="signInWelcome">Enter your workspace's Slack Url</h4>
                    <label>Slack-url
                        <input type="text" value={this.state.workspace} onChange={this.updateField('workspace')}/>
                    </label>
                    {/* <NavLink to="/users/new" className="signInButton">Continue</NavLink> */}
                    <button className="signInButton" type="submit">Continue</button>
                </form>
            </div>
        )
    }
}

export default WorkspaceForm
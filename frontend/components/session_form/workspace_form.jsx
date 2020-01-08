import React from 'react';
import {NavLink} from 'react-router-dom';


class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.workspaceform
        this.handleDefaultUser = this.handleDefaultUser.bind(this)
    }
    updateField(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push('/session/workspace/new')
    }

    handleDefaultUser(e) {
        e.preventDefault();
        this.setState({workspace: 'App-Academy'})
        document.getElementById("workspace-button").click()
        
        // return e => this.setState({workspace: 'App-Academy'}, () => {
        //     console.log('ok')
        //     document.getElementById("workspace-button").click()
        // })
        // this.state = {
        //     workspace: "App-Academy"
        // }
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
                    <h2 className="signInWelcome">Sign in to your workspace</h2>
                    <h4 className="signInWelcome">Enter your workspace's Slack Url</h4>
                    <label>Slack-url:
                        <input type="text" value={this.state.workspace} onChange={this.updateField('workspace')}/>
                    </label>
                    {/* <NavLink to="/users/new" className="signInButton">Continue</NavLink> */}
                    <button className="signInButton" type="submit" id="workspace-button">Continue</button>
                    <button className="signInButton" onClick={this.handleDefaultUser}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default WorkspaceForm
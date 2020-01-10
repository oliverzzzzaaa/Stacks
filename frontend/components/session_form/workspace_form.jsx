import React from 'react';
import {NavLink} from 'react-router-dom';



class WorkspaceForm extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = this.props.workspaceform
        this.handleDefaultUser = this.handleDefaultUser.bind(this)
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
        this.props.history.push('/session/workspace/new')
    }

    componentDidMount() {
        // this.props.fetchWorkspaces();
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
                    <h2 className="signInWelcome">Sign in to your workspace</h2>
                    <h4 className="signInWelcome">Enter your workspace's Slack Url</h4>
                    {this.renderErrors()}
                    <label>Slack-url:
                        <input type="text" value={this.state.workspace} onChange={this.updateField('workspace')}/>
                    </label>
                    {/* <NavLink to="/users/new" className="signInButton">Continue</NavLink> */}
                    <button className="signInButton" type="submit" id="workspace-button">Continue</button>
                    <button className="signInButton" id="workspace-demo-user"onClick={this.handleDefaultUser}>Demo User</button>
                </form>
            </div>
        )
    }
}

export default WorkspaceForm
import { NavLink, Link } from 'react-router-dom'
import React from 'react'

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
        this.state = {
            currentUser: this.props.currentUser,
            workspaces: this.props.workspaces
        }
        this.redirect = this.redirect.bind(this)
        this.showDropdown = this.showDropdown.bind(this)
        this.windowClick = this.windowClick.bind(this)
    }

    componentDidMount() {
        this.props.fetchWorkspaces()
            .then(() => {
                if (this.props.currentUser) {
                    this.props.fetchChannels()
                    .then(()=> this.props.fetchChannelMemberships())
                }
            })
    }

    windowClick() {
        let hidden = document.getElementById("display-show");
        if (hidden) {
            hidden.id = "display-none"
        }
    }

    showDropdown(e) {
        let dropdown = document.getElementById("display-none");
        let hidden = document.getElementById("display-show");
        if (hidden) {
            hidden.id = "display-none"
        } else {
            dropdown.id = "display-show";
        }
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.action().then(
            () => this.props.history.push("/session/new") 
        )
    }
    
    redirect(workspace) {
        let channels = this.props.channels
        let channelId = 0;
        for (let i = channels.length - 1; i >= 0; i--) {
            if (channels[i].workspace_id === workspace.id) {
                channelId = channels[i].id;
            }
        }
        this.props.fetchWorkspace(workspace)
            .then(() => this.props.history.push(`/messages/${channelId}`))
    }
    render() {
        let tryslack = (
            <NavLink to="/users/new" className="marble-button">Try Slack</NavLink>
        );
        let loginout = (
            <section className="header-right">
            <NavLink to='/session/new' className="splash-new-session-link">Sign In</NavLink>
            <NavLink to="/users/new" className="splash-button-link">SignUp</NavLink>
        </section>
        )
        if (Object.keys(this.props.currentUser).length > 0) {
            let workspaceList = this.props.workspaces.map( workspace => {
                return (
                    <button onClick={() => this.redirect(workspace)} className="splash-workspace">{workspace.workspace_name}</button>
                )
            })
            loginout = (
                <section className="header-right">
                    <button onClick={this.showDropdown} className="splash-dropdown-button">Your Workspace</button>
                    <nav className="signout-dropdown-nav" id="display-none">
                        <nav id="your-workspace-nav">
                            {workspaceList}
                        </nav>
                        <button onClick={this.logoutUser} className="signout-button" id="dropdown-signout-button">Sign Out</button>
                    </nav>
                </section>
            )
            tryslack = null
            

        }
        return(
            <div>
                <section className="splash-header">
                    <section className="header-left">
                        <div className="slack-logo-div">
                            <NavLink to='/' className="splash-nav-dropdowns">
                                <img src={window.iconSlack} className="slack-logo"/>
                            </NavLink>
                        </div>
                    </section>
                    {loginout}
                </section>
                <div className="splash-main">
                    <section className="splash-item" id="splash-second">
                        <section id="marble-text">
                            <h1>Slack replaces email inside your company</h1>
                            <h4 id="marble-text-secondary">Keep conversations organized in Slack, the smart alternative to email</h4>
                            {tryslack}
                        </section>
                    </section>
                    <section className="splash-item" id="splash-third">
                        <section id="splash-third-text">
                            <h1 id="Break-out-inbox">Break out of the Inbox</h1>
                            <h4 id="third-subtext">Working in channels gives everyone on your team a shared view of progress and purpose</h4>
                            <div className="three-marble-images">
                                <img src={window.slackMarble1} id="slack-marble-1" className="slack-marble-gif"/>
                                <img src={window.slackMarble2} id="slack-marble-2" className="slack-marble-gif"/>
                                <img src={window.slackMarble3} id="slack-marble-3" className="slack-marble-gif"/>
                            </div>
                        </section>
                    </section>
                    <footer id="splash-footer">
                        <a href="https://github.com/oliverzzzzaaa/Stacks" target="_blank">
                            <img src={window.githubLogo} id="splash-github-logo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/oliver-chen-693a37132/" target="_blank">
                            <img src={window.linkedin} id="splash-linkedin-logo"/>
                        </a>
                        <a href="https://angel.co/oliver-chen-10" target="_blank">
                            <img src={window.angelist} id="splash-angelist-logo"/>
                        </a>
                    </footer>
                </div>
            </div>
        )
    }

}

export default SplashPage

import { NavLink, Link } from 'react-router-dom'
import React from 'react'

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
        this.state = this.props.currentUser;
        this.redirect = this.redirect.bind(this)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.action().then(
            () => this.props.history.push("/session/new") 
        )
    }

    redirect(url) {
        this.props.history.push(url)
    }
    render() {
        let loginout = (
        <section className="header-right">
            <NavLink to='/session/new' className="splash-new-session-link">Sign In</NavLink>
            <NavLink to="/users/new" className="splash-button-link">SignUp</NavLink>
        </section>
        )
        if (Object.keys(this.props.currentUser).length > 0) {
            loginout = (
                <section className="header-right">
                    <button onClick={() => this.redirect("/messages")} className="signout" id="splash-dropdown-button">Your Workspace</button>
                    <nav id="signout-dropdown-nav">
                        <nav id="your-workspace-nav">
                            <img src={window.aalogo} id="splash-aa-logo"/>
                            <button onClick={() => this.redirect("/messages")} className="signout-button" id="your-workspace-button">Workspace Name</button>
                        </nav>
                        <button onClick={this.logoutUser} className="signout-button" id="dropdown-signout-button">Sign Out</button>
                    </nav>
                </section>
            )
        }
        return(
            <div>
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
                    {loginout}
                </section>
                <div className="splash-main">
                    {/* <section className="splash-first">
                        
                    </section> */}
                    <section className="splash-item" id="splash-second">
                        <section id="marble-text">
                            <h1>Slack replaces email inside your company</h1>
                            <h4 id="marble-text-secondary">Keep conversations organized in Slack, the smart alternative to email</h4>
                            <NavLink to="/users/new" className="marble-button">Try Slack</NavLink>
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
                        <h2>I am the footer</h2>
                    </footer>
                </div>
            </div>
        )
    }

}

export default SplashPage

import { NavLink, Link } from 'react-router-dom'
import React from 'react'

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
        this.logoutUser = this.logoutUser.bind(this)
        this.state = this.props.currentUser;
    }

    componentDidMount() {
        console.log(this.state)
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.action().then(
            () => this.props.history.push("/session/new") 
        )
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
                    <button onClick={this.logoutUser} className="signout-button">Sign Out</button>
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
                    </section>
                    <section className="splash-item" id="splash-third">
                        
                    </section>
                    <section className="splash-item" id="splash-fourth">
                        
                    </section>
                    <section className="splash-item" id="splash-fifth">
                        
                    </section>
                </div>
            </div>
        )
    }

}

export default SplashPage

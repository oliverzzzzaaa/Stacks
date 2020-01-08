import { NavLink, Link } from 'react-router-dom'
import React from 'react'

class SplashPage extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
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
                    <section className="header-right">
                        <NavLink to='/session/new' className="splash-new-session-link">Sign In</NavLink>
                        <NavLink to="/users/new" className="splash-button-link">SignUp</NavLink>
                    </section>
                </section>
            </div>
        )
    }

}

export default SplashPage

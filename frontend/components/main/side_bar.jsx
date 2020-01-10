import React from 'react'
class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.backToSplash = this.backToSplash.bind(this)
    }

    backToSplash(e) {
        e.preventDefault();
        this.props.history.push("/")
    }

    render() {
        console.log(this.props)
        return(
            <div className="sidebar-container-purple">
                <div className="sidebar-link" id="sidebar-workspace-dropdown-hover">
                    <h4 id="sidebar-workspace-name" className="sidebar-link">Workspace Name</h4>
                    <h4 className="sidebar-link"><span className="green-dot"></span>User's Name</h4>
                    
                </div>
                <div id="channel-div">
                    <h4 className="sidebar-link">Channels</h4>
                    <section>
                        <h4 className="sidebar-link locked-channel">
                            <img src={window.sidebarWhiteLock} className="sidebar-white-lock"/>
                            Sample Channel
                        </h4>
                    </section>
                </div>
                <div id="dm-div">
                    <h4 className="sidebar-link">
                        Direct Messages
                    </h4>
                    <section>
                        <h4 className="sidebar-link">&#x25CB; Demo User 2</h4>
                        <h4 className="sidebar-link">&#x25CB; Demo User 3</h4>
                    </section>
                </div>
                <div className="back-to-splash">
                    <button onClick={this.backToSplash}>Back to Splash</button> 
                </div>
            </div>
        )
    }
}

export default SideBar
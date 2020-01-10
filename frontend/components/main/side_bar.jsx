import React from 'react'
class SideBar extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="sidebar-container-purple">
                <div>
                    <h4 id="sidebar-workspace-name" className="sidebar-link">Workspace Name</h4>
                    <h4 className="sidebar-link">User's Name</h4>
                </div>
                <div id="channel-div">
                    <h4 className="sidebar-link">Channels</h4>
                    <div className="sidebar-link">
                        <h4 className="sidebar-link locked-channel">
                            <img src={window.sidebarWhiteLock} className="sidebar-white-lock"/>
                            Sample Channel
                        </h4>
                    </div>
                </div>
                <div id="dm-div">
                    <h3 className="sidebar-link">
                        Direct Messages
                    </h3>
                </div>
            </div>
        )
    }
}

export default SideBar
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
class SideBar extends React.Component {

    constructor(props) {
        super(props)
        this.backToSplash = this.backToSplash.bind(this)
        this.logoutUser = this.logoutUser.bind(this)
    }

    backToSplash(e) {
        e.preventDefault();
        this.props.history.push("/")
    }

    componentDidMount() {
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout().then(
            () => this.props.history.push("/session/new") 
        )
    }

    buttonclickTest(e, id) {

    }

    showDropdown() {
        let hiddendropdown = document.getElementById("hidden-sidebar-dropdown");
        
        if (hiddendropdown) {
            hiddendropdown.id = "revealed-sidebar-dropdown"
        } else {
            document.getElementById("revealed-sidebar-dropdown").id = "hidden-sidebar-dropdown"
        }
    }

    openProfileModal() {
        let modal = document.getElementsByClassName("user-profile-modal")[0]
        modal.classList.add("user-profile-modal-show")
    }

    render() {
        const channelList = []

        const dmList = this.props.channels.map (channel => {
            if (channel.private_message === 1) {
                return (
                    <li className="sidebar-link DM" key={channel.id}>
                        <NavLink to={`/messages/${channel.id}`} className="DM-link" onClick={() => this.props.changeChannel(channel.id)}>
                            {channel.channel_name}
                        </NavLink>
                    </li>
                )
            } else {
                channelList.push(
                    <li className="sidebar-link locked-channel" key={channel.id}>
                        <img src={window.sidebarWhiteLock} className="sidebar-white-lock"/>
                        <NavLink to={`/messages/${channel.id}`} className="channel-links" onClick={() => this.props.changeChannel(channel.id)}>
                            {channel.channel_name}
                        </NavLink>
                    </li>
                )
                return(<div></div>)
            }
        })

        let currentUserId = this.props.currentUserId

        const workspaceList = this.props.workspaces.map( workspace => {
            return (
                <li className="sidebar-workspace" key={workspace.id}>
                    {workspace.workspace_name}
                </li>
            )
        })
        return(
            <div className="sidebar-container-purple">
                <div className="sidebar-link" id="sidebar-workspace-dropdown-hover" onClick={this.showDropdown}>
                    <h4 id="sidebar-workspace-name" className="sidebar-link">{this.props.workspaces[0] ? this.props.workspaces[0].workspace_name : null}</h4>
                    <h4 className="sidebar-link" id="current-user-link"><span className="green-dot"></span>{this.props.currentUser[currentUserId].name}</h4>
                    <div id="hidden-sidebar-dropdown" className="sidebar-revealed">
                        {/* <div id="profile-link" className="sidebar-dropdown">Profile Link</div> */}
                        <div className="sidebar-dropdown sidebar-edit-dropdown" onClick={this.openProfileModal}>
                            Edit Profile
                        </div>
                        {/* <ul className="sidebar-workspace-ul sidebar-dropdown">
                            {workspaceList}
                        </ul> */}
                        <a href="/" className="sidebar-back-to-slash sidebar-dropdown">Back to Splash</a>
                        <button onClick={this.logoutUser} className="sidebar-signout sidebar-dropdown" id="sidebar-signout">Sign Out</button>
                    </div>
                </div>
                <div id="channel-div">
                    <h4 className="sidebar-link">Channels</h4>
                    <ul id="channel-list-ul">
                        {channelList}
                    </ul>
                </div>
                <div id="dm-div">
                    <h4 className="sidebar-link">
                        Direct Messages
                    </h4>
                    <section>
                        {dmList}
                        {/* <h4 className="sidebar-link DM">&#x25CB; Demo User 2</h4>
                        <h4 className="sidebar-link DM">&#x25CB; Demo User 3</h4> */}

                    </section>
                </div>
            </div>
        )
    }
}

export default SideBar
import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.props.currentUser}
                    fetchMessages={this.props.fetchMessages} 
                    fetchWorkspaces={this.props.fetchWorkspaces}
                    fetchChannels={this.props.fetchChannels}/>
                <ChatContainer currentUser={this.props.currentUser} fetchMessages={this.props.fetchMessages}/>
            </div>
        )
    }
}

export default Main
import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchChannels();
        this.props.fetchMessages();
        this.props.fetchWorkspaces();
    }

    render() {
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.props.currentUser}
                    fetchMessages={this.props.fetchMessages} 
                    fetchWorkspaces={this.props.fetchWorkspaces}
                    fetchChannels={this.props.fetchChannels}/>
                <ChatContainer currentUser={this.props.currentUser} fetchMessages={this.props.fetchMessages} fetchChannels={this.props.fetchChannels}/>
            </div>
        )
    }
}

export default Main
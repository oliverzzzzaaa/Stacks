import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchChannels();
        // this.props.fetchMessages();
        this.props.fetchWorkspaces();
    }

    render() {
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.props.currentUser}
                    messages = {this.props.messages}
                    workspaces={this.props.workspaces}
                    channels={this.props.channels}/>
                <ChatContainer currentUser={this.props.currentUser} fetchMessages={this.props.fetchMessages} channels={this.props.channels}/>
            </div>
        )
    }
}

export default Main
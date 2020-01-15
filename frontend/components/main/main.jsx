import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.changeChannel = this.changeChannel.bind(this)
        this.state = {
            currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)],
        }
    }

    componentDidMount() {
        // this.props.fetchChannels();
        // this.props.fetchMessages();
        this.props.fetchWorkspaces();
    
    }

    changeChannel(channelId) {
        this.setState({currentChannel: this.props.channels[channelId]})
    }

    render() {
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.props.currentUser}
                    messages = {this.props.messages}
                    workspaces={this.props.workspaces}
                    channels={this.props.channels}
                    changeChannel={this.changeChannel}/>
                <ChatContainer currentChannel={this.state.currentChannel} currentUser={this.props.currentUser} channels={this.props.channels} messages={this.props.messages} />
            </div>
        )
    }
}

export default Main
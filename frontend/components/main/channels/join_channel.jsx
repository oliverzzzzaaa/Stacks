import React from 'react'

class JoinChannel extends React.Component {
    constructor(props) {
        super(props)
        this.updateField = this.updateField.bind(this)
        this.searchChannels = this.searchChannels.bind(this)
        this.renderChannels = this.renderChannels.bind(this)
        this.state = {
            search: '',
            channels: this.props.channels
        }
    }

    updateField() {
        return e => {
            this.setState({search: e.currentTarget.value})
        }
    }

    searchChannels() {
        return e => {
            // e.currentTarget.value
        }
    }



    joinChannel(channel) {
        data = {
            channelId: channel.id,
            userId: this.props.currentUserId
        }
        this.props.action(data)
        // console.log(this.props.currentUserId)
    }

    renderChannels() {
        if (this.props.workspace) {
            let channelList = this.state.channels.map(channel => {
                // if (this.props.currentUser)
                if (channel.private_message === 0 && channel.workspace_id === this.props.workspace.id) {
                    return (
                        <li className="join-channel-li" onClick={() => this.joinChannel(channel)}>
                            <h3>{channel.channel_name}</h3>
                            <h4>{channel.channel_topic}</h4>
                        </li>
                    )
                } else {
                    return null;
                }
            })
            return (
                <ul>
                    {channelList}
                </ul>
            )
        } else {
            return null;
        }
    }

    render() {
        return(
            <div className="join-channel-div">
                <button className="escape-button">
                    <div className="join-channel-main" onClick={this.props.closeJoinChannel}>
                        <div>X</div>
                        <div>esc</div>
                    </div>
                </button>
                <div className="join-channel-main">
                    <h1>Browse Channels</h1>
                    <input type="text" className="browse-channels-input" onChange={this.updateField()} value={this.state.search}
                    placeholder="Search Channels"/>
                    <br/>
                    {this.renderChannels()}
                </div>
            </div>
        )
    }
}

export default JoinChannel
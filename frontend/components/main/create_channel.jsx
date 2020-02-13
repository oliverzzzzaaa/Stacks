import React from 'react'

class CreateChannel extends React.Component {
    constructor(props) {
        super(props)
        this.createChannel = this.createChannel.bind(this)
        this.state = {
            channelName: "",
            channelTopic: ""
        }
    }

    createChannel() {
        channel = {
            channel_topic: this.state.channelTopic,
            channel_name: this.state.channelName,
            private_message: 0,
            workspace_id: this.props.currentChannel.id
        }
        this.props.createChannel(channel)
            .then((channel) => console.log(channel))
    }

    render() {
        return(
            <div className="create-channel">
                <h1>Create A Channel</h1>
                <h3>Channels are where your members communicate. They're best when organized around a topic --</h3>
                <h3>#jobs for example.</h3>
                <form onSubmit={this.createChannel}>
                    <label>Name
                        <input type="text" value={this.state.channelName} placeholder="Ex. #Marketing"/>
                    </label>
                    <label>Purpose
                        <input type="text" value={this.state.channelTopic} placeholder="Ex. General Ideas"/>
                    </label>
                    <button type="submit">Create!</button>
                </form>
            </div>
        )
    }
}

export default CreateChannel;
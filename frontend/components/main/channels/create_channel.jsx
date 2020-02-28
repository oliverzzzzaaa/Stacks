import React from 'react'

class CreateChannel extends React.Component {
    constructor(props) {
        super(props)
        this.submitChannelForm = this.submitChannelForm.bind(this)
        this.cancel = this.cancel.bind(this)
        this.updateState = this.updateState.bind(this)
        this.state = {
            channelName: "",
            channelTopic: ""
        }
    }

    cancel(e) {
        e.preventDefault();
        this.props.history.goBack()
    }

    submitChannelForm(e) {
        e.preventDefault()
        let channel = {
            channel_topic: this.state.channelTopic,
            channel_name: this.state.channelName,
            private_message: 0,
            workspace_id: this.props.workspaces[0].id
        }
        this.props.createChannel(channel)
        this.props.fetchChannels()
        .then(() => this.props.history.goBack())
        // this.props.history.push("/messages")
        // this.props.history.goBack()
    }

    updateState(field) {
        return e => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    componentDidMount() {
        this.props.fetchWorkspaces()
        .then(() => {
            console.log(this.props.workspaces)
        })
    }

    render() {
        return(
            <div className="create-channel">
                <h1>Create A Channel</h1>
                <h3>Channels are where your members communicate. They're best when organized around a topic --</h3>
                <h3>#jobs for example.</h3>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.submitChannelForm}>
                    <label>Name
                        <input type="text" value={this.state.channelName} placeholder="Ex. #Marketing" onChange={this.updateState('channelName')}/>
                    </label>
                    <label>Purpose
                        <input type="text" value={this.state.channelTopic} placeholder="Ex. General Ideas" onChange={this.updateState('channelTopic')}/>
                    </label>
                    <div className="create-channel-buttons">
                        <button onClick={this.cancel} className="create-cancel-button">Cancel</button>
                        <button type="submit" className="create-submit-button">Create Channel</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateChannel;
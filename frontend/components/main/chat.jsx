import React from 'react'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.messages || {}
        this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchMessages()
        App.cable.subscriptions.create(
            { channel: "ChatChannel" },
            {
                received: data => {
                    this.setState({messages: this.state.messages.concat(data.message)});
                },
                speak: function(data) {
                    return this.perform("speak", data);
                }
            }
        )
    }

    componentDidUpdate() {
        this.bottom.current.scrollIntoView();
    }

    render() {
        const messageList = this.props.messages.map( message => {
            return (
                <li key={message.id}>
                    {message} 
                    <div ref={this.bottom} />
                </li>
            )
        })
        return (
            <div className="chat-container">
                <div className="message-list">
                    {messageList}
                </div>
            </div>
        )
    }
}

export default Chat
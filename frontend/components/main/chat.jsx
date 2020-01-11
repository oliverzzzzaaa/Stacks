import React from 'react'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.messages
        // this.bottom = React.createRef();
    }

    componentDidMount() {
        this.props.fetchMessages();
        this.props.fetchChannels();
        // App.cable.subscriptions.create(
        //     { channel: "ChatChannel" },
        //     {
        //         received: data => {
        //             this.setState({messages: this.state.messages.concat(data.message)});
        //         },
        //         speak: function(data) {
        //             return this.perform("speak", data);
        //         }
        //     }
        // )
    }

    // componentDidUpdate() {
    //     this.bottom.current.scrollIntoView();
    // }

    render() {
        // const messageList = (
        //     <div>MessageList</div>
        // );
        const messageList = this.props.messages.map( message => {
            return (
                <li key={message.id} className="message-li">
                    <div className="chat-profile-pic">
                        <img src={window.defaultPicture}/>
                    </div>
                    <div>
                        <div className="chat-top-row">
                            <span className="chat-author-name">
                                {message.author.name}
                            </span>
                            <h5 className="chat-timestamp">
                                {(new Date(message.created_at).toLocaleTimeString())}
                            </h5>
                        </div>
                        <h4 className="chat-message-body">
                            {message.body} 
                        </h4>
                    </div>
                    {/* <div ref={this.bottom} /> */}
                </li>
            )
        })
        return (
            <div className="chat-container">
                <div id="chat-header">
                    <div id="chat-container-left">

                    </div>
                </div>
                <div className="message-list">
                    {messageList}
                </div> 
                <div id="create-message-div">
                </div>
            </div>
        )
    }
}

export default Chat
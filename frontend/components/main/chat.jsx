import React from 'react'
import Quill from 'quill'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.messages
        // this.bottom = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchMessages();
        this.props.fetchChannels();
        var quill = new Quill('#editor', {
            theme: 'snow'
          });
        const form = document.querySelector('form');
        form.onsubmit = function() {
        var body = document.querySelector('input[name=body]');
        body.value = JSON.stringify(quill.getContents());
        console.log("Submitted", $(form).serialize(), $(form).serializeArray());
        };
          
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

        handleSubmit() {
            console.log("great!")
            
        }

    render() {
          
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
                    <form onSubmit={this.handleSubmit}>
                        <div id="editor">
                            <p></p>
                            <p></p>
                            <p><br/></p>
                        </div>
                        <input type="submit" hidden={true}/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Chat
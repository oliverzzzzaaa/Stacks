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
        var quill = new Quill('#editor-container', {
            modules: {
              toolbar: [
                ['bold', 'italic'],
                ['link', 'blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }]
              ]
            },
            placeholder: 'Enter text',
            theme: 'snow'
          });
          
          var form = document.querySelector('form');
          form.onsubmit = function() {
            // Populate hidden form on submit
            var about = document.querySelector('input[name=about]');
            about.value = JSON.stringify(quill.getContents());
            
            console.log("Submitted", $(form).serialize(), $(form).serializeArray());
            
            // No back end to actually submit to!
            alert('Open the console to see the submit data!')
            return false;
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
                <div id="form-container" className="container">
                    <form>
                        <div className="row form-group">
                            <input name="about" type="hidden"/>
                            <div id="editor-container">
                                <p></p>
                            </div>
                        </div>
                        <div className="row">
                        <button className="btn btn-primary" type="submit"></button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        )
    }
}

export default Chat
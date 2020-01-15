import React from 'react'
import Quill from 'quill'

class Chat extends React.Component {
    constructor(props) {
        super(props)
        // this.bottom = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this)
        this.editMessageForm = this.editMessageForm.bind(this)
        this.cancelEditMessage = this.cancelEditMessage.bind(this)
        this.submitEditMessage = this.submitEditMessage.bind(this)
        this.state =  {
            currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)],
            currentUser: this.props.currentUser,
            messages: this.messages
        }
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.currentChannel.id !== this.props.match.params.currentChannel.id) {
            this.props.fetchMessages()   
        }
    }

    componentDidMount() {
       
        this.props.fetchChannels()
            .then(()=> { 
                // this.currentChannel = (this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)])
                this.setState({currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)]}),    
                this.props.fetchMessages().then(() => {
                    console.log(this.props)
                    if(document.getElementsByClassName("message-list")[0].lastChild){
                    document.getElementsByClassName("message-list")[0].lastChild.scrollIntoView({ behavior: "smooth" });}
                })
            })

        let bindings = {
            submit: {
                key: "enter",
                handler: (range, context) => {
                    this.handleSubmit.bind(this)()
                }
            }
        }
        let quill = new Quill('#editor-container', {
            modules: {
                keyboard: {
                    bindings: bindings
                },
              toolbar: [
                ['bold', 'italic'],
                // ['link', 'blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }]
              ]
            },
            placeholder: 'Enter text',
            theme: 'snow'
          });

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
    componentDidUpdate() {
        let lastMessage = document.getElementsByClassName("message-list")[0].lastChild
        if (lastMessage !== null) {
            lastMessage.scrollIntoView({ behavior: "smooth" });
        }
     }
    handleSubmit() {
        let newMessagebody = document.getElementsByClassName('ql-editor')[0].children[0].innerHTML
        let newMessage = {
            body: newMessagebody,
            workspace_id: 25,
            channel_id: this.state.currentChannel.id
        }
        
        this.props.postMessage(newMessage).then(
            () => document.getElementsByClassName('ql-editor')[0].children[0].innerHTML = ""
        )
        
    }

    editMessageForm(messageId) {
        let messageLi = document.getElementById(`message${messageId}`)
        let message = messageLi.innerHTML
        let editform = document.createElement("form")
        let editforminput = document.createElement("input")
        editform.setAttribute("className", "edit-message-form")
        editform.setAttribute("id", "edit-message-form")
        editforminput.setAttribute("id", "edit-message-input")
        editforminput.setAttribute("type", "text")
        editforminput.className = "edit-message-input"
        // editforminput.setAttribute("className", "edit-message-input")
        editforminput.setAttribute("value", message)
        let cancelButton = document.createElement("button")
        let submitButton = document.createElement("button")
        cancelButton.setAttribute("type", "button")
        cancelButton.setAttribute("value", "Cancel")
        cancelButton.innerHTML = "Cancel"
        cancelButton.setAttribute("onClick", this.cancelEditMessage)
        cancelButton.onclick = () => this.cancelEditMessage()
        submitButton.setAttribute("value", "Submit")
        submitButton.setAttribute("className", "edit-submit-button")
        cancelButton.setAttribute("className", "edit-cancel-button")
        submitButton.innerHTML = "Submit"
        submitButton.setAttribute("type", "submit")
        editform.onsubmit = (e , messageId) => this.submitEditMessage(messageId)
        let messageIdButton = document.createElement("button")
        messageIdButton.innerHTML = messageId
        messageIdButton.setAttribute("id", "message-id-button")
        editform.appendChild(messageIdButton)
        editform.appendChild(editforminput)
        editform.appendChild(cancelButton)
        editform.appendChild(submitButton)
        messageLi.appendChild(editform)
    }
    
    cancelEditMessage() {
        document.getElementById("edit-message-form").remove()  
        this.forceUpdate()
    }

    submitEditMessage() {
        let messageId = (document.getElementById("message-id-button").innerHTML)
        let message = this.props.messageobj[messageId]
        message.body = document.getElementById("edit-message-input").value
        this.props.updateMessage(message)
    }

    render() {
        
        const messageList = this.props.messages.map( message => {
        // const messageList = this.messages.map( message => {
            if (this.state.currentChannel && message.channel_id === this.state.currentChannel.id) {
                return (
                    <li key={message.id} className="message-li">
                        <div className="chat-profile-pic">
                            <img src={window.defaultPicture}/>
                        </div>
                        <div className="chat-content">
                            <div className="chat-top-row">
                                <span className="message-left">
                                    <span className="chat-author-name">
                                        {message.author.name}
                                    </span>
                                    <h5 className="chat-timestamp">
                                        {(new Date(message.created_at).toLocaleTimeString())}
                                    </h5>
                                </span>
                            </div>
                            <span className="chat-message-body" id={`message${message.id}`}>
                                {message.body} 
                            </span>
                            <span className="edit-message-popup" onClick={ () => this.editMessageForm(message.id)}>
                                <i className="fa fa-ellipsis-v message-ellipses"></i>
                            </span>
                        </div>
                    </li>
                )}else{
                    return (<div key={message.id}></div>)
                }
            }
            )
            
        return (
            <div className="chat-container">
                <div id="chat-header">
                    <div id="chat-container-left">
                        <i className="fa">&#xf023;</i>
                        <strong id="channel-name-header">
                            {(this.state.currentChannel) ? this.state.currentChannel.channel_name : "OH NO"}
                        </strong>
                        <div>
                            <span>&#x2606; | <i className="fa fa-user"></i> | <i className="fa">&#xf08d;</i>
                                <span id="channel-topic-span">
                                    {(this.state.currentChannel) ? this.state.currentChannel.channel_topic : "ABCDAFAFD"}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="message-list">
                    {messageList}
                </div> 
                <div id="create-message-div">
                <div id="form-container" className="container" >
                    <form id="new-message-form"> 
                        <div className="row form-group">
                            <input name="about" type="hidden" />
                            <div id="editor-container" >
                                <p id="new-message-body"></p> 
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
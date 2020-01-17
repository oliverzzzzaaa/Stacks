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
        // this.editDeletePopup = this.editDeletePopup.bind(this)
        this.state =  {
            // currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)],
            currentChannel: this.props.channel,
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
                    if(document.getElementsByClassName("message-list")[0].lastChild){
                    document.getElementsByClassName("message-list")[0].lastChild.scrollIntoView({ behavior: "smooth" });}
                })
            })
            .then(() => {
                App.cable.subscriptions.create(
                    { channel: "ChatChannel" },
                    {
                        received: data => {
                            console.log('RECEIVED DATA')
                            console.log(data.message)
                            console.log(this.state.messages)
                            this.props.receiveMessage(data.message)
                            // this.state.messages.concat(data.message)
                        },
                        speak: function(data) {
                            return this.perform("speak", data)
                        }
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

        



    }
    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname.slice(10,this.props.location.pathname.length) !== this.props.location.pathname.slice(10,this.props.location.pathname.length)) {
            this.setState({currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)]}, e => {
                this.props.fetchMessages()
                    .then(() => 
                        console.log(this.state.currentChannel)
                    )
            })
        }

        let lastMessage = document.getElementsByClassName("message-list")[0].lastChild
        if (lastMessage !== null) {
            lastMessage.scrollIntoView({ behavior: "smooth" });
        }
     }
    handleSubmit() {    
        let newMessagebody = document.getElementsByClassName('ql-editor')[0].children[0].innerHTML
        let newMessage = {
            body: newMessagebody,
            workspace_id: this.state.currentChannel.workspace_id,
            channel_id: this.state.currentChannel.id
        }
        
        this.props.postMessage(newMessage).then( 
            () => {
                document.getElementsByClassName('ql-editor')[0].children[0].innerHTML = "";
                App.cable.subscriptions.subscriptions[0].speak({ message: newMessage });
            }
        )
        
    }

    editMessageForm(messageId) {
        document.getElementsByClassName("clicked-ellipsis")[0].classList.remove("clicked-ellipsis")
        let divs = document.getElementsByClassName("edit-delete-div")
        divs[0].remove()
        let messageLi = document.getElementById(`message${messageId}`)
        let message = messageLi.innerHTML
        let editform = document.createElement("form")
        let editforminput = document.createElement("input")
        editform.setAttribute("className", "edit-message-form")
        editform.setAttribute("id", "edit-message-form")
        editforminput.setAttribute("id", "edit-message-input")
        editforminput.setAttribute("type", "text")
        editforminput.className = "edit-message-input"
        editforminput.setAttribute("value", message)
        let cancelButton = document.createElement("button")
        let submitButton = document.createElement("button")
        cancelButton.setAttribute("type", "button")
        cancelButton.setAttribute("value", "Cancel")
        cancelButton.innerHTML = "Cancel"
        cancelButton.setAttribute("onClick", this.cancelEditMessage)
        cancelButton.onclick = () => this.cancelEditMessage()
        submitButton.setAttribute("value", "Submit")
        submitButton.setAttribute("class", "edit-submit-button")
        cancelButton.setAttribute("class", "edit-cancel-button")
        submitButton.innerHTML = "Save Changes"
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
        let ellipses = document.getElementsByClassName("message-ellipses")
        while (ellipses.length > 0) {
            ellipses[0].className = "ellipses-hidden"
        }
    }
    
    cancelEditMessage() {
        document.getElementById("edit-message-form").remove()
        let ellipses = document.getElementsByClassName("ellipses-hidden")
        while (ellipses.length > 0) {
            ellipses[0].className = "fa fa-ellipsis-v message-ellipses"
        }  
    }
    
    submitEditMessage() {
        let messageId = (document.getElementById("message-id-button").innerHTML)
        let message = this.props.messageobj[messageId]
        message.body = document.getElementById("edit-message-input").value
        this.props.updateMessage(message)
        let ellipses = document.getElementsByClassName("ellipses-hidden")
        while (ellipses.length > 0) {
            ellipses[0].className = "fa fa-ellipsis-v message-ellipses"
        }  
    }
    

    editDeletePopup(messageId) {
        let editMessagePopup = document.getElementById(`edit-message-popup-${messageId}`)
        editMessagePopup.classList.add("clicked-ellipsis")
        let editDeleteDiv = document.createElement("div")
        editDeleteDiv.setAttribute("class", "edit-delete-div")
        let editButton = document.createElement("button")
        let deleteButton = document.createElement("button")
        // created a form to work around onclick
        let editButtonForm = document.createElement("form")
        editButtonForm.setAttribute("class", "hidden-form")
        editButton.classList.add("edit-delete-button")
        deleteButton.classList.add("edit-delete-button")
        editButton.innerHTML = "Edit Message"
        deleteButton.innerHTML = "Delete Message"
        editButton.setAttribute("type", "submit")
        deleteButton.onclick = () => this.props.openModal(messageId)
        editButton.onclick = () => this.editMessageForm(messageId)
        // editButtonForm.onsubmit = (e, messageId) => this.editMessageForm(messageId)
        deleteButton.setAttribute("type", "button")
        editButton.setAttribute("class", "edit-message-button")
        deleteButton.setAttribute("class", "delete-message-button")
        editButtonForm.appendChild(editButton)
        editDeleteDiv.appendChild(editButtonForm)
        editDeleteDiv.appendChild(deleteButton)
        editMessagePopup.appendChild(editDeleteDiv)
    }

    render() {
        let cChannel = this.props.channel;
        const messageList = this.props.messages.map( message => {
        // const messageList = this.messages.map( message => {
            if (this.state.currentChannel && message.channel_id === this.state.currentChannel.id) {
                let messagetime = null
                if (new Date(message.created_at).toLocaleDateString() !== new Date().toLocaleDateString()) {
                    messagetime = new Date(message.created_at).toLocaleDateString()
                } else {
                    messagetime = new Date(message.created_at).toLocaleTimeString()
                }
                return (
                    <li key={message.id} className="message-li">
                        <div className="chat-profile-pic">
                            <img src={window.defaultPicture}/>
                        </div>
                        <div className="chat-content">
                            <div className="chat-top-row" id={`top-row-${message.id}`}>
                                <span className="message-left">
                                    <span className="chat-author-name">
                                        {message.author.name}
                                    </span>
                                    <h5 className="chat-timestamp">
                                        {messagetime}
                                        {/* {(new Date(message.created_at).toLocaleTimeString())} */}
                                        {/* {(new Date(message.created_at).toLocaleDateString())} */}
                                    </h5>
                                </span>
                            </div>
                            <span className="chat-message-body" id={`message${message.id}`}>
                                {message.body} 
                            </span>
                            <span className="edit-message-popup" id={`edit-message-popup-${message.id}`} onClick={ () => this.editDeletePopup(message.id)}>
                                <i className="fa fa-ellipsis-v message-ellipses"></i>
                            </span>
                            {/* <span className="edit-message-popup" onClick={ () => this.editMessageForm(message.id)}>
                                <i className="fa fa-ellipsis-v message-ellipses"></i>
                            </span> */}
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
                            {(this.state.currentChannel) ? this.state.currentChannel.channel_name : "Choose a channel"}
                        </strong>
                        <div>
                            <span>&#x2606; | <i className="fa fa-user"></i> | <i className="fa">&#xf08d;</i>
                                <span id="channel-topic-span">
                                    {(this.state.currentChannel) ? this.state.currentChannel.channel_topic : " "}
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
import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.changeChannel = this.changeChannel.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
        this.state = {
            currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)],
        }
    }

    openModal(messageId) {
        document.getElementsByClassName("modal")[0].classList.add("modal-show")
        let messagediv = document.createElement("div")
        messagediv.setAttribute("class", "delete-message-id")
        messagediv.innerHTML = messageId
        document.getElementById("chat-header").append(messagediv)
    }

    closeModal() {
        document.getElementsByClassName("modal-show")[0].classList.remove("modal-show")
    }

    deleteMessage() {
        let messageId = document.getElementsByClassName("delete-message-id")[0].innerHTML
        this.props.deleteMessage(messageId)
            .then(() => this.closeModal())
    }

    componentDidMount() {
        this.props.fetchWorkspaces();
    
    }

    changeChannel(channelId) {
        this.setState({currentChannel: this.props.channels[channelId]})
    }

    render() {
        window.onclick = function (e) {
            console.log(e.target.matches('.edit-delete-div'))
            if (!e.target.matches('.edit-delete-div') && !e.target.matches(".message-ellipses")) {
                const popups = document.getElementsByClassName('edit-delete-div')
                if (popups.length > 0) {
                    document.getElementsByClassName("clicked-ellipsis")[0].classList.remove("clicked-ellipsis")
                    while (popups.length > 0) {
                        popups[0].remove()
                    }
                }
            }
        }
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.props.currentUser}
                    messages = {this.props.messages}
                    workspaces={this.props.workspaces}
                    channels={this.props.channels}
                    changeChannel={this.changeChannel}
                    currentChannel={this.state.currentChannel}/>
                <ChatContainer channel={this.state.currentChannel} currentUser={this.props.currentUser} 
                    channels={this.props.channels} messages={this.props.messages} 
                    openModal={this.openModal}/>
                <div className="modal">
                    <div className="modal-content">
                        <span className="are-you-sure">Are you sure you want to delete this message?</span>
                        <div id="modal-button-div">
                            <button id="delete-cancel-button" onClick={this.closeModal}>Cancel</button>
                            <button id="delete-confirm-button" onClick={this.deleteMessage}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main





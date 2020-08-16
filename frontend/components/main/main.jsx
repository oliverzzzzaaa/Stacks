import React from 'react'
import ChatContainer from './chat_container';
import SideBarContainer from './side_bar_container'
import JoinChannel from './channels/join_channel'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.workspace = this.props.workspaces[0]
        this.changeChannel = this.changeChannel.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.deleteMessage = this.deleteMessage.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.updateField = this.updateField.bind(this)
        this.closeProfileModal=  this.closeProfileModal.bind(this)
        this.openJoinChannel = this.openJoinChannel.bind(this)
        this.closeJoinChannel = this.closeJoinChannel.bind(this)
        this.state = {
            currentChannel: this.props.channels[this.props.location.pathname.slice(10,this.props.location.pathname.length)],
            email: Object.values(this.props.currentUser)[0].email,
            name: Object.values(this.props.currentUser)[0].name,
            joinChannelModal: false,
            channels: this.props.memberships,
            workspace: this.props.workspaces[0],
            memberships: (this.props.memberships),
            currentUser: this.props.currentUser
        }
    }

    openJoinChannel() {
        this.setState({joinChannelModal: true})
    }

    closeJoinChannel() {
        
        this.setState({joinChannelModal: false})
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
        console.log(this.props.theState)
        this.props.fetchWorkspaces()
            .then((res) => {
                this.setState({workspace: Object.values(res.workspaces)[0]})
                console.log(this.props)
            })
    }

    updateUser() {
        this.props.updateUser({
            id: Object.values(this.props.currentUser)[0].id,
            username: Object.values(this.props.currentUser)[0].username,
            email: document.getElementById("edit-user-email").value,
            name: document.getElementById("edit-user-name").value
        })
    }

    changeChannel(channelId) {
        this.setState({currentChannel: this.props.channels[channelId]})
    }

    updateField(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    closeProfileModal() {
        let modal = document.getElementsByClassName("user-profile-modal")[0]
        if (modal) {
            modal.classList.remove("user-profile-modal-show")
        }
    }

    render() {
        window.onclick = function (e) {
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
        let currUser = Object.values(this.props.currentUser)[0]
        return(
            <div className="main-div">
                <SideBarContainer 
                    currentUser={this.state.currentUser[0]}
                    messages = {this.props.messages}
                    workspaces={this.props.workspaces}
                    workspace={this.state.workspace}
                    channels={this.props.channels}
                    changeChannel={this.changeChannel}
                    currentChannel={this.state.currentChannel}
                    openCreateChannel={this.openCreateChannel}
                    openJoinChannel={this.openJoinChannel}
                    memberships={this.state.memberships}/>
                <ChatContainer channel={this.state.currentChannel} currentUser={this.props.currentUser} 
                    channels={this.props.channels} 
                    openModal={this.openModal}
                        />
                    {/* messages={this.props.messages}  */}
                <div className="modal">
                    <div className="modal-content">
                        <span className="are-you-sure">Are you sure you want to delete this message?</span>
                        <div id="modal-button-div">
                            <button id="delete-cancel-button" onClick={this.closeModal}>Cancel</button>
                            <button id="delete-confirm-button" onClick={this.deleteMessage}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className="user-profile-modal">
                    <div className="user-profile-content">
                        <div className="x-button" onClick={this.closeProfileModal}>
                            &times;
                        </div>
                        <form className="user-profile-form" onSubmit={this.updateUser}>
                            <div className="user-profile-picture-div">
                                <h3>Edit Your Profile</h3>
                                <h6>Sorry Profile Pictures are for paid members</h6>
                            </div>
                            <div className="user-profile-input-div">
                                <label>Email
                                    <input type="text" value={this.state.email} id="edit-user-email" onChange={this.updateField('email')}/>
                                </label>
                                <label>Name
                                    <input type="text" value={this.state.name} id="edit-user-name" onChange={this.updateField('name')}/>
                                </label>
                            </div>
                            <button type="submit" className="update-profile-button">Update Profile</button>
                        </form>
                    </div>
                </div>
                {this.state.joinChannelModal ? <JoinChannel 
                currentUserId={this.props.currentUserId} action={this.props.joinChannel} memberships={this.props.memberships}
                workspace={this.state.workspace} closeJoinChannel={this.closeJoinChannel} channels={this.props.channels}/> : null}
            </div>
        )
    }
}

export default Main





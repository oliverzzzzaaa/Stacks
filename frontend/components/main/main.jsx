import React from 'react'
import Chat from './chat';
import SideBar from './side_bar'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <SideBar currentUser={this.props.currentUser} fetchMessages={this.props.fetchMessages}/>
                <Chat currentUser={this.props.currentUser} fetchMessages={this.props.fetchMessages}/>
            </div>
        )
    }
}

export default Main
import React from 'react'

class JoinChannel extends React.Component {
    constructor(props) {
        super(props)
        this.updateField = this.updateField.bind(this)
        this.searchChannels = this.searchChannels.bind(this)
        this.state = {
            search: ''
        }
    }

    updateField() {
        return e => {
            this.setState({search: e.currentTarget.value})
        }
    }

    searchChannels() {
        return e => {
            // e.currentTarget.value
        }
    }

    render() {
        return(
            <div className="join-channel-div">
                <button className="escape-button">
                    <div className="join-channel-main" onClick={this.props.closeJoinChannel}>
                        <div>X</div>
                        <div>esc</div>
                    </div>
                </button>
                <div>
                    <h1>Browse Channels</h1>
                    <input type="text" className="browse-channels-input" onChange={this.updateField()} value={this.state.search}/>

                </div>
            </div>
        )
    }
}

export default JoinChannel
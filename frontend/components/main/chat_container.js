import Chat from './chat'
import { connect} from "react-redux"
import {fetchChannels} from '../../actions/channel_actions'
import {fetchMessages} from '../../actions/message_actions'
import {postMessage} from '../../actions/message_actions'
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages),
    // messages: state.messages[ownProps.match.params.channelId]
    channels: state.entities.channels,
    // currentChannel: Object.values(state.entities.channels)[0]
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMessages: () => dispatch(fetchMessages()),
    postMessage: (message) => dispatch(postMessage(message)) 
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat))
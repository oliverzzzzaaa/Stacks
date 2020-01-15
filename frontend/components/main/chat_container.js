import Chat from './chat'
import { connect} from "react-redux"
import {fetchChannels} from '../../actions/channel_actions'
import {fetchMessages} from '../../actions/message_actions'
import {postMessage, updateMessage, deleteMessage} from '../../actions/message_actions'
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages),
    // messages: state.messages[ownProps.match.params.channelId]
    channels: state.entities.channels,
    currentChannel: Object.values(state.entities.channels),
    messageobj: state.entities.messages
})

const mapDispatchToProps = dispatch => ({
    fetchChannels: () => dispatch(fetchChannels()),
    fetchMessages: () => dispatch(fetchMessages()),
    postMessage: (message) => dispatch(postMessage(message)),
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageId) => dispatch(deleteMessage(messageId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Chat))
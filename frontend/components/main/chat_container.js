import Chat from './chat'
import { connect } from "react-redux"
import {fetchChannels} from '../../actions/channel_actions'
import {postMessage} from '../../actions/message_actions'


const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = dispatch => ({
    // fetchChannels: () => dispatch(fetchChannels()),
    postMessage: (message) => dispatch(postMessage(message)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
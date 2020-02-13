import CreateChannel from './create_channel'
import { connect} from "react-redux"
import { withRouter } from 'react-router-dom';
import {createChannel} from '../../actions/channel_actions'


const mapStateToProps = (state, ownProps) => {
    return {
    channels: state.entities.channels,
    currentChannel: Object.values(state.entities.channels),
}}

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel))
import CreateChannel from './create_channel'
import { connect} from "react-redux"
import { withRouter } from 'react-router-dom';
import {createChannel, fetchChannels} from '../../../actions/channel_actions'
import receiveCurrentUser from '../../../actions/session_actions'
import {fetchWorkspaces} from '../../../actions/workspace_actions'


const mapStateToProps = (state, ownProps) => {
    return {
        workspaces: Object.values(state.entities.workspaces),
}}

const mapDispatchToProps = dispatch => ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    fetchChannels: () => dispatch(fetchChannels())
    // fetchWorkspace: (workspace) => dispatch(fetchWorkspace(workspace))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateChannel))
import {connect} from 'react-redux'
import WorkSpaceForm from './workspace_form'
import { fetchWorkspaces } from '../../actions/workspace_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    workspaceform: {workspace: ''}
})

const mapDispatchToProps = dispatch => ({
    fetchWorkspaces: () => dispatch(fetchWorkspaces())
    // action: (workspace) => dispatch(signin(workspace))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpaceForm)


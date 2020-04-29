import {connect} from 'react-redux'
import WorkSpaceForm from './workspace_form'
import { fetchWorkspaces, searchWorkspace } from '../../actions/workspace_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
})

const mapDispatchToProps = dispatch => ({
    fetchWorkspaces: () => dispatch(fetchWorkspaces()),
    searchWorkspace: (workspaceName) => dispatch(searchWorkspace(workspaceName))
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpaceForm)


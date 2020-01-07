import {connect} from 'react-redux'
import WorkSpaceForm from './workspace_form'

const mapStateToProps = state => ({
    workspaceform: {workspace: ''}
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(WorkSpaceForm)


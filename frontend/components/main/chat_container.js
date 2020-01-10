import Chat from './chat'
import { connect } from "react-redux"


const mapStateToProps = (state, ownProps) => ({
    messages: Object.values(state.entities.messages)
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
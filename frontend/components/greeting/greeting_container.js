import { connect } from 'react-redux';
import { signout } from '../../actions/session';
import { modalOpen } from '../../actions/modal_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => {
    debugger
    console.log('greeting state')
    return {
        currentUser: session.currentUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(signout()),
        modalOpen: modal => dispatch(modalOpen(modal))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
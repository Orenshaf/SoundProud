import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import Splash from './splash';

const msp = ({ session }) => ({
    currentUser: session.currentUser
});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
});

export default connect(msp, mdp)(Splash);
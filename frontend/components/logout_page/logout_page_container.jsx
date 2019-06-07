import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import LogoutPage from './logout_page';

const msp = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id] || null,
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
})

export default connect(msp, mdp)(LogoutPage);

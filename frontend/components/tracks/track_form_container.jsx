import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createTrack } from '../../actions/track_actions';
import TrackForm from './track_form';

const msp = (state, ownProps) => ({
    userId: state.session.id
});

const mdp = dispatch => ({
    createTrack: (formTrack) => dispatch(createTrack(formTrack))
})

export default withRouter(connect(msp, mdp)(TrackForm));


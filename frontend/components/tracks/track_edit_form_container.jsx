import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateTrack } from '../../actions/track_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import TrackEditForm from './track_edit_form';

const msp = (state, ownProps) => ({
    tracks: state.entities.tracks,
});

const mdp = dispatch => ({
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
    updateTrack: (formTrack) => dispatch(updateTrack(formTrack))
});

export default withRouter(connect(msp, mdp)(TrackEditForm));
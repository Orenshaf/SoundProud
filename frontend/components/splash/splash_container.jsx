import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions'
import { fetchTracks, fetchCurrentTrack } from '../../actions/track_actions';
import Splash from './splash';

const msp = ({ entities, session }) => ({
    currentUser: session.currentUser,
    tracks: Object.values(entities.tracks),

});

const mdp = dispatch => ({
    openModal: modal => dispatch(openModal(modal)),
    fetchTracks: () => dispatch(fetchTracks()),
    fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
});

export default connect(msp, mdp)(Splash);
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShowPage from './track_show_page';
import { fetchTrack, deleteTrack } from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const track = state.entities.tracks[ownProps.match.params.trackId] || {};
    const user = state.entities.users[track.user_id];
    return ({
        user,
        track,
        currentUserId: state.session.id
    })
}

const mdp = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteTrack: (id) => dispatch(deleteTrack(id))
})

export default withRouter(connect(msp,mdp)(TrackShowPage));
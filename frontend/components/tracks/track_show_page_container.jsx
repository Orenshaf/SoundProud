import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShowPage from './track_show_page';
import { fetchTrack, deleteTrack, fetchCurrentTrack} from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
    const track = state.entities.tracks[ownProps.match.params.trackId] || {};
    const user = state.entities.users[track.user_id];
    let comments;
    if (track.comments){
        comments = track.comments.map( commentId => {
            return state.entities.comments[commentId]
        })
    } else {
        comments = null;
    }
    const currentTrack = state.ui.currentTrack;
    const currentTime = state.ui.trackPlayer.currentTime ? state.ui.trackPlayer.currentTime : null;
    return ({
        user,
        track,
        currentUserId: state.session.id,
        currentTrack,
        currentTime,
        comments
    })
}

const mdp = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteTrack: (id) => dispatch(deleteTrack(id)),
    fetchCurrentTrack: (id) => dispatch(fetchCurrentTrack(id)),
})

export default withRouter(connect(msp,mdp)(TrackShowPage));
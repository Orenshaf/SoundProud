import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShowPage from './track_show_page';
import { fetchTrack, deleteTrack, fetchCurrentTrack} from '../../actions/track_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchComments, clearComments } from '../../actions/comment_actions';

const msp = (state, ownProps) => {
    const track = state.entities.tracks[ownProps.match.params.trackId] || null;
    const user = track ? state.entities.users[track.user_id] : null;
    const currentTrack = state.ui.currentTrack;
    const comments = track && track.comments ? track.comments.map(commentId => state.entities.comments[commentId]) : null;
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
    clearComments: () => dispatch(clearComments()),
    fetchComments: trackId => dispatch(fetchComments(trackId))
})

export default withRouter(connect(msp,mdp)(TrackShowPage));
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TrackShowPage from './track_show_page';
import { fetchTrack } from '../../actions/track_actions';

const msp = (state, ownProps) => {
    debugger
    const track = state.entities.tracks[ownProps.match.params.trackId] || {};
    const user = state.entities.users[track.user_id];
    return ({
        user,
        track
    })
}

const mdp = (dispatch) => ({
    fetchTrack: (id) => dispatch(fetchTrack(id)),
})

export default withRouter(connect(msp,mdp)(TrackShowPage));
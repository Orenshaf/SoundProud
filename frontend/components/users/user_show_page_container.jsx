import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show_page';
import { fetchUser } from '../../actions/user_actions';


const msp = (state, ownProps) => {
    const user = state.entities.users[ownProps.match.params.userId];
    let tracks;
    if (user.tracks) {
        tracks = user.tracks.map( trackId => {
            return state.entities.tracks[trackId];
        })
    }
    return ({
        user,
        tracks
    })
}

const mdp = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default withRouter(connect(msp, mdp)(UserShowPage));
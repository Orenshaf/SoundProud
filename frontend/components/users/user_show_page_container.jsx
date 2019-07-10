import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserShowPage from './user_show_page';
import { fetchUser } from '../../actions/user_actions';


const msp = state => {
    const user = state.entities.users[ownProps.match.params.trackId] || null;
    let tracks;
    if (user) {
        tracks = user.tracks.map(trackId => {
            return state.entities.tracks[trackId];
        })
    } else {
        tracks = null;
    }
    return ({
        user,
        tracks
    })
}

const mdp = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(msp, mdp)(UserShowPage);
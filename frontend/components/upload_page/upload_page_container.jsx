import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { uploadTrack } from '../../actions/track_actions';
import UploadPage from './upload_page';

const msp = (state, ownProps) => ({
    userId: state.session.id,
});

const mdp = dispatch => ({
    uploadTrack: (formTrack) => dispatch(uploadTrack(formTrack))
})

export default withRouter(connect(msp, mdp)(UploadPage));
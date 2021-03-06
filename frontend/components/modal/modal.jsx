import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginInfoFormContainer from '../splash/login_info_form_container';;
import TrackEditFormContainer from '../track_edit/track_edit_form_container';


class Modal extends React.Component { 
    constructor(props) {
        super(props);
        
        this.state = ({
            modalReady: false
        })
    }

    componentDidUpdate () {
        if (this.props.modal && !this.state.modalReady) {
            setTimeout(() => this.setState({modalReady: true}), 500)
        } else if (!this.props.modal && this.state.modalReady) {
            this.setState({modalReady: false})
        }
    }


    render () {
        if (!this.props.modal) {
            return null;
        }
        let component;
        switch (this.props.modal) {
            case 'loginInfo':
                component = <LoginInfoFormContainer />;
                break;
            case 'trackEditForm':
                component = <TrackEditFormContainer />;
                break
            default:
                return null;
        }
        return (
            <div className="modal-background" onClick={() => this.props.closeModal()}>
                <div className="modal-positioner">
                    <div className={`modal-child-start ${this.state.modalReady ? "modal-child" : ""}`} onClick={e => e.stopPropagation()}>
                        {component}
                    </div>
                </div>

            </div>
        );
    }
}

const msp = (state) => {
    return {
        modal: state.ui.modal,
    };
};

const mdp = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(msp, mdp)(Modal);
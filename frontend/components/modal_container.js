import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import Modal from './modal';
import {closeModal} from '../actions/modal_actions';

const msp = (state, ownProps) => {
  const {modal} = state.ui;
  return {
    userId: ownProps.match.params.userId,
    modalType: modal.modalType,
    file: modal.file,
    photoUrl: modal.photoUrl
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(Modal));
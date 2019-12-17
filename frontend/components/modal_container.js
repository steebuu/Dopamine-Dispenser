import { connect } from 'react-redux';
import Modal from './modal';
import {closeModal} from '../actions/modal_actions';

const msp = (state, ownProps) => {
  return {
    type: state.ui.modal.type,
    users: state.entities.users,
    id: ownProps.match.params.id
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(Modal);
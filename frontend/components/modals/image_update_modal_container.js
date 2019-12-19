import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {closeModal, openModal} from '../../actions/modal_actions';
import {updateImage} from '../../actions/image_actions';
import ImageUpdateModal from './image_update_modal';

const msp = (state, ownProps) => {
  const { users, images } = state.entities;
  const { userId, imageId } = ownProps.match.params;
  return {
    user: users[userId],
    image: images[imageId]
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    openModal: modalType => dispatch(openModal(modalType)),
    updateImage: image => dispatch(updateImage(image))
  };
};

export default withRouter(connect(msp, mdp)(ImageUpdateModal));
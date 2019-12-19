import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ImageModal from './image_modal';
import {closeModal, openModal} from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  const {userId, imageId} = ownProps.match.params;
  const {users, images} = state.entities;
  return{
    user: users[userId],
    image: images[imageId],
    modal: state.ui.modal,
    image_ids: users[userId].image_ids
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
    openModal: (modal, image, user) => dispatch(openModal(modal, image, user))
  };
};

export default withRouter(connect(msp, mdp)(ImageModal));
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ImageModal from './image_modal';
import {closeModal, openModal} from '../../actions/modal_actions';
import {deleteImage} from '../../actions/image_actions';


const msp = (state, ownProps) => {
  const {userId, imageId} = ownProps.match.params;
  const {users, images} = state.entities;
  const sessionId = state.session.id;
  return{
    user: users[userId],
    images,
    image: images[imageId],
    modal: state.ui.modal,
    image_ids: users[userId].image_ids,
    sessionId: sessionId
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal)),
    deleteImage: (id) => dispatch(deleteImage(id))
  };
};

export default withRouter(connect(msp, mdp)(ImageModal));
import {connect} from "react-redux";
import ImageModal from './image_modal';
import {closeModal, openImageModal} from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  // debugger;
  return{
    user: state.entities.users[ownProps.id],
    image: state.entities.images[state.ui.modal.imageId],
    modal: state.ui.modal,
    image_ids: state.entities.users[ownProps.id].image_ids
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal()),
    openImageModal: (modal, id) => dispatch(openImageModal(modal, id))
  };
};

export default connect(msp, mdp)(ImageModal);
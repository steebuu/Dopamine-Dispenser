import {connect} from "react-redux";
import ImageModal from './image_modal';
import {closeModal} from '../../actions/modal_actions';


const msp = (state, ownProps) => {
  // debugger;
  return{
    user: state.entities.users[ownProps.id],
    image: state.entities.images[state.ui.modal.imageId],
    modal: state.ui.modal
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ImageModal);
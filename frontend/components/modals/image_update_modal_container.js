import { connect } from 'react-redux';
import ImageUpdateModal from './image_update_modal';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.id],
    image: ownProps.image
  };
};

const mdp = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ImageUploadModal);
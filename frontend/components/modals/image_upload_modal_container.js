import {connect} from 'react-redux';
import ImageUploadModal from './image_upload_modal';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.id],
    file: state.ui.modal.file,
    photoUrl: state.ui.modal.photoUrl,
    id: ownProps.id
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(msp, mdp)(ImageUploadModal);
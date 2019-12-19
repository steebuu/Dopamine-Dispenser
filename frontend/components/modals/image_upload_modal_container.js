import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ImageUploadModal from './image_upload_modal';

const msp = (state, ownProps) => {
  const {users} = state.entities;
  const {modal} = state.ui;
  const {userId} = ownProps.match.params;
  return {
    currentUser: users[userId],
    file: modal.file,
    photoUrl: state.ui.modal.photoUrl,
    userId: userId
  };
};

const mdp = dispatch => {
  return{
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(msp, mdp)(ImageUploadModal));
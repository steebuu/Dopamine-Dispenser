import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import {uploadImage} from '../../util/session_api_util';

const msp = (state, file) => {
  return{
    currentUser: state.entities.users[state.session.id],
    file: file
  };
};

const mdp = dispatch => {
  return {
    uploadImage: (formData) => dispatch(uploadImage(formData))
  };
};

export default connect(msp, mdp)(ImageUpload);
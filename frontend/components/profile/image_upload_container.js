import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import {uploadImage} from '../../util/session_api_util';

const msp = state => {
  return{
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => {
  return {
    uploadImage: (formData) => dispatch(uploadImage(formData))
  };
};

export default connect(msp, mdp)(ImageUpload);
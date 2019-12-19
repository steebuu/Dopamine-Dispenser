import { connect } from 'react-redux';
import ImageUpload from './image_upload';
import {createImage} from '../../actions/image_actions';

const msp = (state, file) => {
  return{
    currentUser: state.entities.users[state.session.id],
    file: file
  };
};

const mdp = dispatch => {
  return {
    createImage: (formData) => dispatch(createImage(formData)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(msp, mdp)(ImageUpload);
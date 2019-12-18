import {connect} from 'react-redux';
import ImageUploadModal from './image_upload_modal';

const msp = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.id]
  };
};

export default connect(msp, null)(ImageUploadModal);
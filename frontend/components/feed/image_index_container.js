import {connect} from 'react-redux';
import ImageIndex  from './image_index';
import {openImageModal} from '../../actions/modal_actions';
import {fetchImages} from '../../actions/image_actions';

const msp = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    images: state.entities.images,
    user: state.entities.users[1]
  };
};

const mdp = dispatch => {
  return{
    openModal: modal => dispatch(openModal(modal)),
    openImageModal: (modal, id) => dispatch(openImageModal(modal, id)),
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(msp, mdp)(ImageIndex);
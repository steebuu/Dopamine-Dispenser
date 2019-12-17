import {connect} from 'react-redux';
import ImageIndex  from './image_index';
import {openModal} from '../../actions/modal_actions';
import {fetchImages} from '../../actions/image_actions';

const msp = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    images: state.entities.images,
    user: state.entities.users[1]
  };
};

const mdp = dispatch => {
  return{
    openModal: modal => dispatch(openModal(modal)),
    fetchImages: () => dispatch(fetchImages())
  };
};

export default connect(msp, mdp)(ImageIndex);
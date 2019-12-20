import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import ImageIndex  from './image_index';
import {fetchImages} from '../../actions/image_actions';
import {openModal} from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const {userId, imageId} = ownProps.match.params;
  const {users, images} = state.entities;
  return {
    currentUser: users[state.session.id],
    images: images,
    user: users[userId],
    userId: userId,
    imageId: imageId,
    users
  };
};

const mdp = dispatch => {
  return{
    openModal: modal => dispatch(openModal(modal)),
    fetchImages: () => dispatch(fetchImages())
  };
};

export default withRouter(connect(msp, mdp)(ImageIndex));
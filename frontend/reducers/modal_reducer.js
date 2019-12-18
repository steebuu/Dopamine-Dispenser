import { OPEN_MODAL, CLOSE_MODAL, OPEN_IMAGE_MODAL, OPEN_UPLOAD_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {type: action.modal, file: action.file, photoUrl: action.photoUrl});
    case OPEN_IMAGE_MODAL:
      return Object.assign({}, state, {type: action.modal, imageId: action.imageId});
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;
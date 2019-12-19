import { OPEN_MODAL, CLOSE_MODAL, OPEN_IMAGE_MODAL, OPEN_UPLOAD_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {}, action) => {
  // debugger;
  switch (action.type) {
    case OPEN_MODAL:
      return {modal: action.modal, file: action.file, photoUrl: action.photoUrl};
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;
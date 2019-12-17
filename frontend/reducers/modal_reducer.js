import { OPEN_MODAL, CLOSE_MODAL, OPEN_IMAGE_MODAL } from '../actions/modal_actions';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, {type: action.modal});
    case OPEN_IMAGE_MODAL:
      return Object.assign({}, state, {type: action.modal, imageId: action.imageId});
    case CLOSE_MODAL:
      return {};
    default:
      return state;
  }
};

export default modalReducer;
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_UPLOAD_MODAL = "OPEN_ULOAD_MODAL";
export const OPEN_MODAL_TWO = "OPEN_MODAL_TWO";

export const openModal = (modalType, file, photoUrl) => {
  return {
    type: OPEN_MODAL,
    modalType: modalType,
    file: file,
    photoUrl: photoUrl
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

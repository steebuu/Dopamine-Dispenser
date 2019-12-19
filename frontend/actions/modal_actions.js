export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_UPLOAD_MODAL = "OPEN_ULOAD_MODAL";

export const openModal = (modal, file, photoUrl) => {
  return {
    type: OPEN_MODAL,
    modal: modal,
    file: file,
    photoUrl: photoUrl
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

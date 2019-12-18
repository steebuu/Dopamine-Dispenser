export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_IMAGE_MODAL = "OPEN_IMAGE_MODAL";
export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";

export const openModal = (modal) => {
  return {
    type: OPEN_MODAL,
    modal,
  };
};

export const openImageModal = (modal, imageId) => {
  return {
    type: OPEN_IMAGE_MODAL,
    modal,
    imageId
  };
};

export const openUploadModal = modal => {
  return{
    type: OPEN_IMAGE_MODAL,
    modal
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

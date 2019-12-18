export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_IMAGE_MODAL = "OPEN_IMAGE_MODAL";
export const OPEN_UPLOAD_MODAL = "OPEN_UPLOAD_MODAL";

export const openModal = (modal, file, photoUrl, image, user) => {
  return {
    type: OPEN_MODAL,
    modal,
    file,
    photoUrl,
    imageId
  };
};

export const openImageModal = (modal, imageId) => {
  return {
    type: OPEN_IMAGE_MODAL,
    modal,
    imageId
  };
};

// export const openUploadModal = (modal, file) => {
//   return{
//     type: OPEN_IMAGE_MODAL,
//     modal,
//     file
//   };
// };

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};

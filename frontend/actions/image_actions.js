import * as ImageAPI from '../util/image_api_util';
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";
export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const receiveImage = image => {
  return{
    type: RECEIVE_IMAGE,
    image
  };
};

export const receiveImages = images => {
  return{
    type: RECEIVE_IMAGES,
    images
  };
};

export const removeImage = image => {
  return{
    type: REMOVE_IMAGE,
    image
  };
};

export const createImage = image => dispatch => {
  return ImageAPI.create(image)
    .then(img => dispatch(receiveImage(img)));
};

export const updateImage = image => dispatch => {
  return ImageAPI.update(image)
    .then(image => dispatch(receiveImage(image)));
};

export const fetchImages = () => dispatch => {
  return ImageAPI.fetchImages()
    .then(images => dispatch(receiveImages(images)));
};

export const deleteImage = id => dispatch => {
  return ImageAPI.delete(id)
    .then(image => dispatch(removeImage(image)));
};
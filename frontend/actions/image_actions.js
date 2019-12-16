import * as APIUtil from '../util/image_api_util';
export const RECEIVE_IMAGE = "RECEIVE_IMAGE";
export const RECEIVE_IMAGES = "RECEIVE_IMAGES";

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

export const editImage = image => dispatch => {
  return APIUtil.update(image)
    .then(image => dispatch(receiveImage(image)));
};

export const fetchImages = () => dispatch => {
  return APIUtil.fetchImages()
    .then(images => dispatch(receiveImages(images)));
};

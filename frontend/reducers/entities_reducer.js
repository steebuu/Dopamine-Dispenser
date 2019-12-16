import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import imagesReducer from './images_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  images: imagesReducer
});

export default entitiesReducer;
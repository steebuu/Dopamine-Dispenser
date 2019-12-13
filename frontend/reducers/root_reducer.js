
import { combineReducers } from "redux";
import entitiesReducers from './entities_reducer';
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducers,
  session: sessionReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
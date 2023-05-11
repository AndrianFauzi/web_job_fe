import { combineReducers } from "redux";
import jobReducer from "./jobReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  job: jobReducer,
});
export default rootReducer;

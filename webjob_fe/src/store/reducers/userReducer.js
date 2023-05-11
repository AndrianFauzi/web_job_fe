import { LOGIN_USER } from "../action/actionType";

function userReducer(state = { users: [] }, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

export default userReducer;

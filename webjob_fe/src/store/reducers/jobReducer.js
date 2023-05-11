import { FETCH_LIST_JOB, FETCH_DETAILS_JOB } from "../action/actionType";

const initialState = {
  isLoading: true,
  jobs: [],
  details: [],
};
function jobReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_JOB:
      console.log("disini", action.payload);
      if (!action.payload) {
        return { ...state, isLoading: true };
      } else {
        return { ...state, isLoading: false, jobs: action.payload };
      }
    //   return { ...state, jobs: action.payload };
    case FETCH_DETAILS_JOB:
      if (!action.payload) {
        return { ...state, isLoading: true };
      } else {
        return { ...state, isLoading: false, details: action.payload };
      }
    default:
      return state;
  }
}

export default jobReducer;

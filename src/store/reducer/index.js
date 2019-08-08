import {
  SETCURRENTUSER,
  SETFOLLOWER,
  SETFOLLOWING,
  SETLOADING,
  SETREPO,
  ADDERROR,
  REMOVEERROR,
  REMOVELOADING
} from "../constants";

function rootReducer(state = {}, action) {
  switch (action.type) {
    case SETCURRENTUSER:
      return {
        ...state,
        currentUser: action.data
      };
    case ADDERROR:
      return {
        ...state,
        err: action.err
      };
    case REMOVEERROR:
      return {
        ...state,
        err: null
      };
    case SETLOADING:
      return {
        ...state,
        loading: true
      };
    case REMOVELOADING:
      return {
        ...state,
        loading: false
      };
    case SETFOLLOWER:
      return {
        ...state,
        followers: action.followers
      };
    case SETFOLLOWING:
      return {
        ...state,
        following: action.following
      };
    case SETREPO:
      return {
        ...state,
        repo: action.repo
      };
    default:
      return state;
  }
}

export default rootReducer;

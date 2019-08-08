import {
  setCurrentUser,
  addError,
  removeError,
  setLoading,
  removeLoading,
  setFollowers,
  setFollowing,
  setRepo,
  setStarrted,
  setOrganizations
} from "../constants";

function rootReducer(state = {}, action) {
  switch (action.type) {
    case setCurrentUser:
      return {
        ...state,
        currentUser: action.data
      };
    case addError:
      return {
        ...state,
        err: action.err
      };
    case removeError:
      return {
        ...state,
        err: null
      };
    case setLoading:
      return {
        ...state,
        loading: true
      };
    case removeLoading:
      return {
        ...state,
        loading: false
      };
    case setFollowers:
      return {
        ...state,
        followers: action.followers
      };
    case setFollowing:
      return {
        ...state,
        following: action.following
      };
    case setRepo:
      return {
        ...state,
        repo: action.repo
      };
    case setStarrted:
      return {
        ...state,
        starred: action.starred
      };
    case setOrganizations:
      return {
        ...state,
        organizations: action.organizations
      };
    default:
      return state;
  }
}

export default rootReducer;

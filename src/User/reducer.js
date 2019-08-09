import {
  SET_CURRENT_USER,
  SET_FOLLOWER,
  SET_FOLLOWING,
  SET_REPO,
  REMOVE_CURRENT_USER
} from '../utils/constants';

const InitialState = {
  currentUser: null,
  followers: [],
  following: [],
  repo: []
};

function userReducer(state = InitialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.data
      };
    case SET_FOLLOWER:
      return {
        ...state,
        followers: action.followers
      };
    case SET_FOLLOWING:
      return {
        ...state,
        following: action.following
      };
    case SET_REPO:
      return {
        ...state,
        repo: action.repo
      };
    case REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
}

export default userReducer;

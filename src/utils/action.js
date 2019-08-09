import axios from 'axios';
import {
  SET_CURRENT_USER,
  ADD_ERROR,
  REMOVE_ERROR,
  SET_LOADING,
  REMOVE_LOADING,
  SET_FOLLOWER,
  SET_FOLLOWING,
  SET_REPO
} from './constants';

const settingCurrentUser = data => ({
  type: SET_CURRENT_USER,
  data
});
const addingError = err => ({
  type: ADD_ERROR,
  err
});

const removingError = () => ({
  type: REMOVE_ERROR
});

const settingLoading = () => ({
  type: SET_LOADING
});
const removingLoading = () => ({
  type: REMOVE_LOADING
});
const settingFollowers = followers => ({
  type: SET_FOLLOWER,
  followers
});
const settingFollowing = following => ({
  type: SET_FOLLOWING,
  following
});
const settingRepo = repo => ({
  type: SET_REPO,
  repo
});

const AsyncSetUser = username => {
  return async dispatch => {
    try {
      dispatch(settingLoading());
      dispatch(removingError());
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      dispatch(settingCurrentUser(response.data));
      dispatch(removingLoading());
    } catch (err) {
      console.log(err);
      dispatch(addingError(err));
    }
  };
};

const AsyncSetFollowersFollowingRepo = data => {
  return async dispatch => {
    try {
      dispatch(settingLoading());
      const { type, link } = data;
      const response = await axios.get(`${link}`);
      console.log(response);
      dispatch(removingLoading());
      dispatch(removingError());
      if (type.toUpperCase() === 'FOLLOWERS') {
        dispatch(settingFollowers(response.data));
      } else if (type.toUpperCase() === 'FOLLOWING') {
        dispatch(settingFollowing(response.data));
      } else if (type.toUpperCase() === 'REPOSITORY') {
        dispatch(settingRepo(response.data));
      }
    } catch (err) {
      console.log(err);
      dispatch(addingError(err));
    }
  };
};

export {
  AsyncSetUser,
  AsyncSetFollowersFollowingRepo,
  removingError,
  settingLoading
};

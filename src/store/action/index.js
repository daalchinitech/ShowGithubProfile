import axios from "axios";
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

const settingCurrentUser = data => ({
  type: setCurrentUser,
  data
});
const addingError = err => ({
  type: addError,
  err
});

const removingError = () => ({
  type: removeError
});

const settingLoading = () => ({
  type: setLoading
});
const removingLoading = () => ({
  type: removeLoading
});
const settingFollowers = followers => ({
  type: setFollowers,
  followers
});
const settingFollowing = following => ({
  type: setFollowing,
  following
});
const settingRepo = repo => ({
  type: setRepo,
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

const AsyncSetFollowersFollowing = data => {
  return async dispatch => {
    try {
      dispatch(settingLoading());
      const { type, link } = data;
      const response = await axios.get(`${link}`);
      console.log(response);
      dispatch(removingLoading());
      dispatch(removingError());
      if (type.toUpperCase() === "FOLLOWERS") {
        dispatch(settingFollowers(response.data));
      } else if (type.toUpperCase() === "FOLLOWING") {
        dispatch(settingFollowing(response.data));
      } else if (type.toUpperCase() === "REPOSITORY") {
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
  AsyncSetFollowersFollowing,
  removingError,
  settingLoading
};

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

const settingStarrted = starred => ({
  type: setStarrted,
  starred
});
const settingOrganizations = organizations => ({
  type: setOrganizations,
  organizations
});

const AsyncSetUser = username => {
  return async dispatch => {
    try {
      dispatch(settingLoading());
      dispatch(removingError());
      const repsonse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      dispatch(settingCurrentUser(repsonse.data));
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
      const repsonse = await axios.get(`${link}`);
      if (type === "Followers") {
        dispatch(settingFollowers(repsonse.data));
      } else if (type === "Following") {
        dispatch(settingFollowing(repsonse.data));
      } else if (type === "Repository") {
        dispatch(settingRepo(repsonse.data));
      }
      dispatch(removeLoading());
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

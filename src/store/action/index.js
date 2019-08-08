import axios from "axios";
import {
  SETCURRENTUSER,
  ADDERROR,
  REMOVEERROR,
  SETLOADING,
  REMOVELOADING,
  SETFOLLOWER,
  SETFOLLOWING,
  SETREPO
} from "../constants";

const settingCurrentUser = data => ({
  type: SETCURRENTUSER,
  data
});
const addingError = err => ({
  type: ADDERROR,
  err
});

const removingError = () => ({
  type: REMOVEERROR
});

const settingLoading = () => ({
  type: SETLOADING
});
const removingLoading = () => ({
  type: REMOVELOADING
});
const settingFollowers = followers => ({
  type: SETFOLLOWER,
  followers
});
const settingFollowing = following => ({
  type: SETFOLLOWING,
  following
});
const settingRepo = repo => ({
  type: SETREPO,
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
  AsyncSetFollowersFollowingRepo,
  removingError,
  settingLoading
};

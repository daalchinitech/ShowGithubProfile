import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  AsyncSetUser,
  AsyncSetFollowersFollowingRepo,
  removingError,
  settingLoading
} from '../utils/action';
import UserPageComponent from './component';

class UserPage extends Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.id);
  }
  onClick = (type, no) => {
    let data = {};
    if (type === 'Followers') {
      data = {
        type,
        link: this.props.userData.followers_url
      };
    } else if (type === 'Following') {
      data = {
        type,
        link: this.props.userData.following_url.split('{')[0]
      };
    } else if (type === 'Repository') {
      data = {
        type,
        link: this.props.userData.repos_url
      };
    }

    this.props.setFollowersFollowing(data);
  };

  render() {
    const { loading, userData } = this.props;
    if (!loading && !userData) this.props.history.push('/');

    if (loading || !userData) {
      return <div>Loading...</div>;
    }
    return <UserPageComponent userData={userData} onClick={this.onClick} />;
  }
}

const mapStateToProps = store => {
  return {
    userData: store.user.currentUser,
    loading: store.util.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUser: username => dispatch(AsyncSetUser(username)),
    setFollowersFollowing: data =>
      dispatch(AsyncSetFollowersFollowingRepo(data)),
    removeError: () => dispatch(removingError()),
    setLoading: () => dispatch(settingLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserPage));

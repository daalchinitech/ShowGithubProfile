import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FollowingFollowerComponent from "../component/FollowingFollowerPage";
import { connect } from "react-redux";
import { AsyncSetFollowersFollowing } from "../store/action";

class FollowingFollower extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = "https://api.github.com/users";
    const data = {
      type: this.props.match.url.split("/")[2],
      link: url + this.props.match.url
    };
    this.props.setFollowersFollowing(data);
  }

  render() {
    return (
      <FollowingFollowerComponent
        pageTitle={this.props.pageTitle}
        users={this.props.users}
        onClick={this.onClick}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFollowersFollowing: data => dispatch(AsyncSetFollowersFollowing(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(FollowingFollower));

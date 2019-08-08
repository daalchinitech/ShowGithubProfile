import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import FollowingFollowerComponent from "../component/FollowingFollowerPage";

class FollowingFollower extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  onClick = username => {
    this.props.history.push(`/${username}`);
  };

  render() {
    console.log(this.props);

    return (
      <FollowingFollowerComponent
        pageTitle={this.props.pageTitle}
        users={this.props.users}
        onClick={this.onClick}
      />
    );
  }
}

export default withRouter(FollowingFollower);

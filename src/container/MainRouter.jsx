import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from "./Main";
import UserPage from "./User";
import FollowingFollower from "./FollowingFollower";
import Repository from "./Repository";

class MainRouter extends Component {
  render() {
    console.log(this.props);

    return (
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/:id" component={UserPage} />
        <Route
          exact
          path="/:id/following"
          render={prop => (
            <FollowingFollower
              pageTitle={"Following"}
              users={this.props.following}
              {...prop}
            />
          )}
        />
        <Route
          exact
          path="/:id/followers"
          render={prop => (
            <FollowingFollower
              pageTitle={"Follower"}
              users={this.props.followers}
              {...prop}
            />
          )}
        />
        <Route
          exact
          path="/:id/repository"
          render={prop => (
            <Repository
              pageTitle={"Repository"}
              users={this.props.repo}
              {...prop}
            />
          )}
        />
      </Switch>
    );
  }
}

const mapStateToProps = store => {
  return {
    following: store.following,
    followers: store.followers,
    repo: store.repo
  };
};

export default connect(
  mapStateToProps,
  null
)(MainRouter);

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import MainPage from "../container/MainPage";
import UserPage from "../container/UserPage";
import FollowingPage from "../component/FollowingPage";

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
            <FollowingPage
              following={this.props.following.following}
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
    following: store.following
  };
};

export default connect(
  mapStateToProps,
  null
)(MainRouter);

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainPage from '../Main/container';
import UserPage from '../User/container';
import FollowingFollower from '../FollowerFollowing/container';
import Repository from '../Repository/container';

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
              pageTitle={'Following'}
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
              pageTitle={'Follower'}
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
              pageTitle={'Repository'}
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

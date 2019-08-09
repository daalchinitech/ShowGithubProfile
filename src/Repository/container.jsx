import React, { Component } from "react";
import RepositoryPage from "./component";
import { connect } from "react-redux";
import { AsyncSetFollowersFollowingRepo } from "../utils/action";

class Repository extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const url = "https://api.github.com/users";
    const data = {
      type: "Repository",
      link: url + "/" + this.props.match.url.split("/")[1] + "/repos"
    };
    this.props.setFollowersFollowing(data);
  }

  render() {
    const { loading } = this.props;
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
      <RepositoryPage
        pageTitle={this.props.pageTitle}
        users={this.props.users}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    loading: store.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setFollowersFollowing: data =>
      dispatch(AsyncSetFollowersFollowingRepo(data))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Repository);

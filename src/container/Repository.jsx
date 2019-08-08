import React, { Component } from "react";
import RepositoryPage from "../component/RepositoryPage";
import { connect } from "react-redux";
import { AsyncSetFollowersFollowing } from "../store/action";

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
    return (
      <RepositoryPage
        pageTitle={this.props.pageTitle}
        users={this.props.users}
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
)(Repository);

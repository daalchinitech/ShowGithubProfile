import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Card, Icon, Image, Header } from "semantic-ui-react";
import {
  AsyncSetUser,
  AsyncSetFollowersFollowing,
  removingError
} from "../store/action";
import { Link } from "react-router-dom";

class UserPage extends Component {
  componentDidMount() {
    this.props.setUser(this.props.match.params.id);
  }

  onClick = type => {
    let data = {};
    if (type === "Followers") {
      data = {
        type,
        link: this.props.userData.followers_url
      };
    } else if (type === "Following") {
      data = {
        type,
        link: this.props.userData.following_url.split("{")[0]
      };
    } else if (type === "Repository") {
      data = {
        type,
        link: this.props.userData.repos_url
      };
    }
    console.log(data);

    this.props.setFollowersFollowing(data);
  };

  render() {
    const { loading, userData } = this.props;
    if (loading) {
      return <div></div>;
    }
    console.log(userData);

    return (
      <Card>
        <Image src={`${userData.avatar_url}`} wrapped ui={false} />
        <Card.Content>
          <Header size="huge">{userData.name}</Header>
          <Header size="medium">{userData.login}</Header>

          <Card.Meta>
            <span className="date">{userData.created_at.split("T")[0]}</span>
          </Card.Meta>
          <Card.Description>{userData.bio}</Card.Description>
          <Card.Content>
            <Link
              to={`/${userData.login}/followers`}
              onClick={() => this.onClick("Followers")}
            >
              <Icon name="user" />
              {`Followers ${userData.followers}`} <br />
            </Link>
            <Link
              to={`/${userData.login}/following`}
              onClick={() => this.onClick("Following")}
            >
              <Icon name="user" />
              {`Following ${userData.following} `} <br />
            </Link>
            <Link
              to={`/${userData.login}/repository`}
              onClick={() => this.onClick("Repository")}
            >
              <Icon name="folder" />
              {`Repository ${userData.public_repos} `} <br />
            </Link>
          </Card.Content>
        </Card.Content>
        <Card.Content>
          <Icon name="user" />
          {userData.company} <br />
          <Icon name="location arrow" /> {userData.location}
        </Card.Content>
      </Card>
    );
  }
}

const mapStateToProps = store => {
  return {
    userData: store.currentUser,
    loading: store.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUser: username => dispatch(AsyncSetUser(username)),
    setFollowersFollowing: data => dispatch(AsyncSetFollowersFollowing(data)),
    removeError: () => dispatch(removingError())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserPage));

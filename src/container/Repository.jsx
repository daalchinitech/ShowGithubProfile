import React, { Component } from "react";
import RepositoryPage from "../component/RepositoryPage";

export default class Repository extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <RepositoryPage
        pageTitle={this.props.pageTitle}
        users={this.props.users}
      />
    );
  }
}

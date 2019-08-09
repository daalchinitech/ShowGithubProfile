import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Header, Button, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { settingLoading } from '../utils/action';

import { AsyncSetUser } from '../utils/action';
const InitialState = {
  username: '',
  err: ''
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.props.setLoading();
    this.state = InitialState;
  }

  onChange = (e, data) => {
    this.setState(prev => ({
      [data.name]: data.value
    }));
  };
  onClick = () => {
    const { username } = this.state;
    if (!username.length > 0) {
      return this.setState(prev => ({
        err: 'Invalid Username'
      }));
    }
    this.props.setUser(username);
    this.props.history.push(`/${username}`);
  };
  render() {
    const { err } = this.props;

    return (
      <div>
        <Header as="h1">INPUT GITHUB USERNAME </Header>
        <Input
          focus
          name="username"
          placeholder="Github username"
          onChange={this.onChange}
        />
        <Button onClick={this.onClick}>SEND </Button> <br />
        <Message
          error
          hidden={err ? false : true}
          header="Github 404"
          content={`Username not found on Github`}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    err: store.util.err,
    loading: store.util.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: username => dispatch(AsyncSetUser(username)),
    setLoading: () => dispatch(settingLoading())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainPage));

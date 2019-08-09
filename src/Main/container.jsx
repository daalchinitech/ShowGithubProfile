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
  };
  render() {
    const { err, loading } = this.props;
    const { username } = this.state;
    if (!loading) {
      this.props.history.push(`/${username}`);
    }

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
          content={`Username: '${username}' not found on Github`}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    err: store.err,
    loading: store.loading
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

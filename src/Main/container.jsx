import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { settingLoading, removingCurrentUser } from '../utils/action';
import MainComponent from './component';

import { AsyncSetUser } from '../utils/action';
const InitialState = {
  username: '',
  err: ''
};

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = InitialState;
  }
  componentWillMount() {
    this.props.removingUser();
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
      <MainComponent
        err={err}
        onChange={this.onChange}
        onClick={this.onClick}
      />
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
    setLoading: () => dispatch(settingLoading()),
    removingUser: () => dispatch(removingCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainPage));

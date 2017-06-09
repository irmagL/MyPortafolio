import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchNotifications } from '../actions/notifications/actions';

import Notifications from '../components/commons/Notifications';

class Container extends Component {
  componentDidMount() {
    this.props.startFetchNotifications();
  }
  render() {
      return <Notifications {...this.props}/>;
  }
}

const mapStateToProps = ({ notifications: { entities, isFetching } }) => ({
  isFetching,
  notifications: entities
});

const ContainerNotifications = connect(
  mapStateToProps,
  { startFetchNotifications }
)(Container);

export default ContainerNotifications;

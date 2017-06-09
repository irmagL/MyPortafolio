import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchNotices } from '../actions/notices/actions';

import Notices from '../components/notices/Notices';

class Container extends Component {
  componentDidMount() {
    this.props.startFetchNotices();
  }

  render() {
    return <Notices {...this.props}/>;
  }
}

const mapStateToProps = ({ notices: { entities, isFetching } }) => ({
  isFetching,
  notices: Object.keys(entities).map(x => entities[x])
});

const ContainerNotices = connect(
  mapStateToProps,
  { startFetchNotices }
)(Container);

export default ContainerNotices;

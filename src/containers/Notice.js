import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchNoticeById } from '../actions/notices/actions';

import Notice from '../components/Notice';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchNotice();
  }

  render() {
    return <Notice {...this.props}/>;
  }
}

const mapStateToProps = ({ notices: { entities, selectedKey, isFetching } }) => ({
  ...entities[selectedKey]
});

const mapDispatchToProps = (dispatch, { params: { notice } }) => ({
  startFetchNotice: () => dispatch(startFetchNoticeById(notice))
});

const ContainerNotice = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ContainerNotice;

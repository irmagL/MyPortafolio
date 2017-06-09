import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startDate } from '../actions/date/actions';

import Date from '../components/commons/navbar/Date';

class Container extends Component {
  componentDidMount() {
    this.props.startDate();
  }

  render() {
    return <Date {...this.props}/>;
  }
}

const mapStateToProps = ({ date: { info, isReady } }) => ({
  ...info,
  isReady
});

const ContainerDate = connect(
  mapStateToProps,
  { startDate }
)(Container);

export default ContainerDate;

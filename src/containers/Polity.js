import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchPolity } from '../actions/polity/actions';

import Polity from '../components/Polity';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchPolity();
  }

  render () {
    return <Polity {...this.props}/>;
  }
}

const mapStateToProps = ({ polity: { data, isFetching } }) => ({
  ...data,
  isFetching
});

const ContainerPolity = connect(
  mapStateToProps,
  { startFetchPolity }
)(Container);

export default ContainerPolity;

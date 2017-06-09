import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchWorks } from '../actions/works/actions';

import Works from '../components/works/Works';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchWorks();
  }

  render() {
    return <Works {...this.props}/>;
  }
}

const mapStateToProps = ({ works: { isFetching, entities } }) => ({
  isFetching: isFetching,
  works: Object.keys(entities).map(x => entities[x])
});

const ContainerWorks = connect(
  mapStateToProps,
  { startFetchWorks }
)(Container);

export default ContainerWorks;

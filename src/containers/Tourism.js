import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchTourismById } from '../actions/tourism/actons';

import Tourism from '../components/Tourism';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchTourism();
  }

  render() {
    return <Tourism {...this.props}/>;
  }
}

const mapStateToProps = ({ tourism: { entities, selectedKey, isFetching } }) => ({
  ...entities[selectedKey],
  isFetching: !(isFetching === false && !Object.is(entities[selectedKey]))
});

const mapDispatchToProps = (dispatch, { params: { tourism } }) => ({
  startFetchTourism: () => dispatch(startFetchTourismById(tourism))
});

const ContainerWork = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ContainerWork;

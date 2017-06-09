import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchWorkById } from '../actions/works/actions';

import Work from '../components/Work';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchWork();
  }

  render() {
    return <Work {...this.props}/>;
  }
}

const mapStateToProps = ({ works: { entities, selectedKey, isFetching } }) => ({
  ...entities[selectedKey],
  isFetching: !(isFetching === false && !Object.is(entities[selectedKey]))
});

const mapDispatchToProps = (dispatch, { params: { obra } }) => ({
  startFetchWork: () => dispatch(startFetchWorkById(obra))
});

const ContainerWork = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ContainerWork;

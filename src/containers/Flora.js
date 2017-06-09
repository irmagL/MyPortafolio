import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchFloraById } from '../actions/flora/actions';

import Flora from '../components/Flora';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchFlora();
  }

  render() {
    return <Flora {...this.props}/>;
  }
}

const mapStateToProps = ({ flora: { entities, selectedKey, isFetching } }) => ({
  ...entities[selectedKey],
  isFetching: !(isFetching === false && !Object.is(entities[selectedKey]))
});

const mapDispatchToProps = (dispatch, { params: { flora } }) => ({
  startFetchFlora: () => dispatch(startFetchFloraById(flora))
});

const ContainerFlora = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ContainerFlora;

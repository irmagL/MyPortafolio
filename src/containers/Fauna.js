import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchFaunaById } from '../actions/fauna/actions';

import Fauna from '../components/Fauna';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchFauna();
  }

  render() {
    return <Fauna {...this.props}/>;
  }
}

const mapStateToProps = ({ fauna: { entities, selectedKey, isFetching } }) => ({
  ...entities[selectedKey],
  isFetching: !(isFetching === false && !Object.is(entities[selectedKey]))
});

const mapDispatchToProps = (dispatch, { params: { fauna } }) => ({
  startFetchFauna: () => dispatch(startFetchFaunaById(fauna))
});

const ContainerFauna = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ContainerFauna;

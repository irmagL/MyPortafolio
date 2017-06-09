import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchFauna } from '../actions/fauna/actions';

import Fauna from '../components/fauna/Fauna';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchFauna();
  }

  render() {
    return <Fauna { ...this.props }/>;
  }
}

const mapStateToProps = ({ fauna: { entities, isFetching } }) => ({
  isFetching,
  fauna: Object.keys(entities).map(x => entities[x])
});

const ContainerFauna = connect(
  mapStateToProps,
  { startFetchFauna }
)(Container);

export default ContainerFauna;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchTourisms } from '../actions/tourism/actons';

import Tourisms from '../components/tourism/Tourisms';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchTourisms();
  }

  render() {
    return <Tourisms {...this.props}/>;
  }
}

const mapStateToProps = ({ tourism: { isFetching, entities }  }) => ({
  isFetching: isFetching,
  tourisms: Object.keys(entities).map(x => entities[x])
});

const ContainerTourisms = connect(
  mapStateToProps,
  { startFetchTourisms }
)(Container);

export default ContainerTourisms;

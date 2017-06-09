import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchWeather } from '../actions/weather/actions';

import Weathers from '../components/commons/Weathers';

class Container extends Component {
  componentDidMount() {
    this.props.startFetchWeather();
  }

  render() {
    return <Weathers { ...this.props }/>;
  }
}

const mapStateToProps = ({ weather:{ entities, isFetching } }) => ({
  isFetching,
  weather: entities
});

const ContainerWeather = connect(
  mapStateToProps,
  { startFetchWeather }
)(Container);

export default ContainerWeather;

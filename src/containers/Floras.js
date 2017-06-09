import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startFetchFlora } from '../actions/flora/actions';

import Flora from '../components/flora/Flora';

class Container extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.startFetchFlora();
  }

  render() {
    return <Flora { ...this.props }/>;
  }
}

const mapStateToProps = ({ flora: { entities, isFetching } }) => ({
  isFetching,
  flora: Object.keys(entities).map(x => entities[x])
});

const ContainerFlora = connect(
  mapStateToProps,
  { startFetchFlora }
)(Container);

export default ContainerFlora;

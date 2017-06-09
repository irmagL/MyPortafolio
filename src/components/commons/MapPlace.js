import React, { Component } from 'react';
import { GoogleMap, withGoogleMap, Marker } from 'react-google-maps';

class Map extends Component {
  render() {
    const { markers, center } = this.props;
    return (
      <GoogleMap
        mapTypeId={window.google.maps.MapTypeId.HYBRID}
        defaultZoom={ 15 }
        center={ center }
      >
        { markers.map((marker, key) => (
          marker &&
            <Marker
              position={ marker } defaultAnimation={ 2 } key={ key }
            />
        )) }
      </GoogleMap>
    );
  }
}

const NewMap = withGoogleMap(Map);

class MapPlace extends Component {
  render() {
    const { markers, center, height } = this.props;

    const styles = {
      mapPlace: {
        height: height,
        width: '100%'
      }
    };

    return (
      <NewMap
        containerElement={ <div style={ styles.mapPlace }/> }
        mapElement={ <div style={ styles.mapPlace }/> }
        markers={ markers }
        center={ center }
      />
    );
  }
}

MapPlace.defaultProps ={
  markers: [],
  center: {},
  height: '200px'
};

export default MapPlace;

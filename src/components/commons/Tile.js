import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';

import './Tile.css';

const Tile = ({ date, name, description }) => (
  <div className="col-md-3">
    <Paper zDepth={2} rounded={false}>
      <div className="tile">
        <div>
          <span className="date">{ date }</span>
        </div>
        <div className="name">
          <span>{ _.upperCase(name) }</span>
        </div>
        <div>
          <span className="description">{ description }</span>
        </div>
      </div>
    </Paper>
  </div>
);

export default Tile;

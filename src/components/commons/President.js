import React from 'react';

import Paper from 'material-ui/Paper';

import './President.css';

const President = ({ img, name, periodic }) => (
  <div className="president">
    <Paper>
      <div className="info">
        <div>
          <img src="http://placehold.it/200x200" alt="foto"/>
        </div>
        <div className="name">
          <span>{ name }</span>
        </div>
        <div className="periodic">
          <span>{ periodic }</span>
        </div>
      </div>
    </Paper>
  </div>
);

President.defaultProps = {
  name: 'default name',
  periodic: 'default periodic'
};

export default President;

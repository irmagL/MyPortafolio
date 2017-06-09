import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

const Loader = ({ size }) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <CircularProgress size={ size } thickness={5} color="#E91E63"/>
  </div>
);

Loader.defaultProps = {
  size:80
};

export default Loader;

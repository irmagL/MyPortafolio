import React from 'react';

import Encabezado from './Encabezado';
import Pie from './Pie';

const Estructura = ({ children }) => (
  <div>
    <Encabezado/>
      <div className= "container" style= {{ minHeight: '400px' }}>
        { children }
      </div>
    <Pie/>
  </div>

);

export default Estructura;

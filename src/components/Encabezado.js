import React from 'react';

import Nav from './menus/Nav';
import Banner from './banner/Banner';

const Encabezado = () => (
  <div className= "container" >
    <div className= "row">
      <div className="col-md-12" >
        <Nav/>
        <Banner/>
      </div>
    </div>
  </div>
);

export default Encabezado;

import React from 'react';

import NavBar from './NavBar';
import Bienvenida from './Bienvenida'

const Nav = () => (
  <div className="col-md-4" style={{ height:'400px' }}>
    <Bienvenida/>
    <NavBar/>
  </div>
);

export default Nav;

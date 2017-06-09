import React from 'react';
import { Link, IndexLink } from 'react-router';

import './NavBar.css';

const NavBar = () => (
  <div style={ styles.menu }>
    <div style={ styles.barra }>
      <IndexLink to="/" className="link" activeClassName="active">
        Inicio
      </IndexLink>
      <Link to="/about" className="link" activeClassName="active">
        Acerca de
      </Link>
      <Link to="contact" className="link" activeClassName="active">
        Contacto
      </Link>
    </div>

  </div>
);

const styles = {
  menu: {
    height: '49px',
    backgroundColor: '#02558B'
  },
  barra: {
    display: 'flex',
    flexDirection: 'row'
  },

};

export default NavBar;

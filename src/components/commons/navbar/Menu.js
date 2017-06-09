import React from 'react';
import { Link, IndexLink } from 'react-router';

import './MenuItem.css';

const Menu = () => (
  <div style={{ backgroundColor: '#FFC107' }}>
    <div className="container">
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <IndexLink to="/" className="link" activeClassName="active">
          Inicio
        </IndexLink>
        <Link to="/agencias" className="link" activeClassName="active">
          Agencias
        </Link>
        <Link to="/gobierno" className="link" activeClassName="active">
          Gobierno
        </Link>
        <Link to="/obras" className="link" activeClassName="active">
          Obras
        </Link>
        <Link to="/turismo" className="link" activeClassName="active">
          Turismo
        </Link>
        <Link to="/flora" className="link" activeClassName="active">
          Flora
        </Link>
        <Link to="/fauna" className="link" activeClassName="active">
          Fauna
        </Link>
        <Link to="/recursos-naturales" className="link" activeClassName="active">
          Rec. Naturales
        </Link>
        <Link to="/historia" className="link" activeClassName="active">
          Historia
        </Link>
        <Link to="/transpatencia" className="link" activeClassName="active">
          Transparencia
        </Link>
      </div>
    </div>
  </div>
);

export default Menu;

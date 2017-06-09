import React from 'react';
import { Link } from 'react-router';

import Paper from 'material-ui/Paper';

import Date from '../../../containers/Date';
import Menu from './Menu';

import './Navbar.css';

const Navbar = () => (
  <Paper rounded={false}>
    <div className="nav-bar">
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <div className="container">
          <div className="top">
            <Link to="/" className="go-home">
              <div className="left">
                <div>
                  <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="logo"/>
                </div>
                <div className="place">
                  <div>
                    <span>H. AYUNTAMIENTO</span>
                  </div>
                  <div>
                    <span style={{ fontSize: '18px' }}>SANTA MARIA YUCUHITI</span>
                  </div>
                </div>
              </div>
            </Link>
            <Date/>
          </div>
        </div>
      </div>
      <Menu/>
    </div>
  </Paper>
);

export default Navbar;

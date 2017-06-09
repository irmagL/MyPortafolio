import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

const Card = ({ img, title, subtitle, route, center, button, horizontal }) => (
  <div className={`col-md-${horizontal ? 12 : 6}`}>
    <div style={{ padding: '12px 0px 12px 0px' }}>
      <Paper rounded={false} style={{ display: 'flex', flexDirection: horizontal ? 'row' : 'column' }}>
        <div style={{ width: horizontal ? '50%' : '100%' }}>
          <img style={{ width: '100%' }} src={img} alt="imagen de card"/>
        </div>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: center ? 'center' : 'left', padding: '12px', flex: 1, minHeight: '80px' }}>
            <span style={{ fontSize: '20px' }}>{ _.upperCase(title) }</span>
            <span style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{ subtitle }</span>
          </div>
          <Divider/>
          <div style={{ padding: '12px' }}>
            <Link to={route ? route : '/'}>
              <FlatButton label={ button } secondary/>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  </div>
);

export default Card;

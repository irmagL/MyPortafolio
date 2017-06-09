import React from 'react';
import _ from 'lodash';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import './Section.css';

const Section = ({ title, children, footer, zDepth, col, center }) => (
  <div className={`${center ? `col-md-offset-${(12-col) / 2}` : '' } col-md-${col}`}>
    <Paper zDepth={2} rounded={false}>
      <div className="section">
        {
          title && (
            <div>
              <div className="section-title">
                { _.upperCase(title) }
              </div>
              <Divider/>
            </div>
          )
        }
        <div className="section-body">
          <div className="row">
            <div className="col-md-12">
              { children }
            </div>
          </div>
        </div>
        {
          footer && (
            <div>
              <Divider/>
              <div className="section-footer">
                { footer }
              </div>
            </div>
          )
        }
      </div>
    </Paper>
  </div>
);

export default Section;

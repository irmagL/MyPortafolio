import React from 'react';
import _ from 'lodash';

import './Date.css';
import Weather from '../../../containers/Weather';
import Loader from '../Loader';

const Date = ({ hour, minutes, meridiem, day, month, year, isReady }) => (
  <div className="right">
    <div>
      <Weather/>
    </div>
    {
      isReady
      ? (
        <div className="hour">
          <div className="time">
            <span>{`${hour}:${minutes} ${meridiem}`}</span>
          </div>
          <div className="date">
            <span>{`${_.startCase(month)} ${day} - ${year}`}</span>
          </div>
        </div>
      )
      : <Loader size={20}/>
    }
  </div>
);

export default Date;

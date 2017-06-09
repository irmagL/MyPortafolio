import React from 'react';
import moment from 'moment';

const Notification = ({ date, notification }) => (
  <div style={{ padding: '6px' }}>
    <p style={{ color: 'rgba(0, 0, 0, 0.54)' }}>{ moment.unix(date).locale('es').format("D / MMMM / YYYY") }</p>
    <p className="text-justify">{ notification }</p>
  </div>
);

Notification.defaultProps = {
  date: 'this is a date',
  notification: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
};

export default Notification;

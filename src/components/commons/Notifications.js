import React from 'react';

import Loader from './Loader';
import Section from './Section';
import Notification from './Notification';

const Notifications = ({ notifications, isFetching }) => (
  <Section title="avisos" col={ 12 }>
    {
      isFetching !== null
      ? isFetching
        ? <Loader/>
        : <Notification date={ notifications.date } notification={ notifications.aviso }/>
      : null
    }
  </Section>
);

export default Notifications;

import React from 'react';

import Loader from './Loader';
import Weather from './Weather';

const Weathers = ({ weather, isFetching }) => (
  <div>
    {
      isFetching !== null
      ? isFetching
        ? <Loader size={ 40 }/>
        : <Weather weather={ weather }/>
      : null
    }
  </div>
);

export default Weathers;

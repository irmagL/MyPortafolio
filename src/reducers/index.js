import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import noticesReducer from './noticesReducer';
import notificationsReducer from './notificationsReducer';
import worksReducer from './worksReducer';
import weatherReducer from './weatherReducer';
import floraReducer from './floraReducer';
import tourismReducer from './tourismReducer';
import faunaReducer from './faunaReducers';
import dateReducer from './dateReducer';
import polityReducer from './polityReducer';
import ContactoReducer from './ContactoReducer';

const rootReducer = combineReducers({
  routing,
  form,
  notices: noticesReducer,
  notifications: notificationsReducer,
  weather: weatherReducer,
  flora: floraReducer,
  works: worksReducer,
  tourism: tourismReducer,
  fauna: faunaReducer,
  date: dateReducer,
  polity: polityReducer,
  contacto: ContactoReducer
});

export default rootReducer;

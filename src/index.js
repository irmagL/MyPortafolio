import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Root from './containers/Root';
import configureStore from './store/configureStore';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

import 'bootstrap/dist/css/bootstrap.css';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

injectTapEventPlugin();

const muiTheme = getMuiTheme ({
  palette: {
    primary1Color: '#02C8A7'
  }
});

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Root store={store} history={history}/>
  </MuiThemeProvider>,
  document.getElementById('root')
);

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

export default <Route path="/">
  <IndexRoute component={App}/>
  <Route path="about" component={ About }/>
  <Route path="contact" component={ Contact }/>
</Route>;

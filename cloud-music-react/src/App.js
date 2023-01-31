import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import routes from './router';
import store from './store';

import AppHeader from 'cmp/app-header';
import AppFooter from 'cmp/app-footer';


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        {renderRoutes(routes)}
        <AppFooter />
      </HashRouter>
    </Provider>
  )
})

export default App;

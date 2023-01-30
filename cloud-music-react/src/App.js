import React, { memo } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from '@/router';

import AppHeader from 'cmp/app-header';
import AppFooter from 'cmp/app-footer';


const App = memo(() => {
  return (
    <HashRouter>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </HashRouter>
  )
})

export default App;

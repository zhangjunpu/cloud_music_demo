import { memo, Suspense } from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { Provider } from "react-redux";

import routes from "./router";
import store from "./store";

import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import PlayerBar from "./pages/player/player-bar";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./common/theme";

const App = memo(() => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <HashRouter>
          <AppHeader />
          <Suspense fallback={<div>loading</div>}>{renderRoutes(routes)}</Suspense>
          <AppFooter />
          <PlayerBar />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  );
});

export default App;

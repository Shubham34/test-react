import React from "react";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import AppLayout from "./containers/LayoutContainer/AppLayout";
import { useDeviceType } from "./helper/useDeviceType";

// External CSS import here
import "rc-drawer/assets/index.css";
import "rc-table/assets/index.css";
import "rc-collapse/assets/index.css";
import "react-multi-carousel/lib/styles.css";
// import 'components/MultiCarousel/MultiCarousel.style.css';
import "@redq/reuse-modal/lib/index.css";
import { GlobalStyle } from "./styled/global.style";
import history from "./services/history";
import configureStore from "./store/ConfigureStore";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import Routes from "./routes";
const store = configureStore();

const App = ({ Component, pageProps, userAgent, query }) => {
  const deviceType = useDeviceType(userAgent);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <IntlProvider locale="en">
          <Router history={history}>
            <AppLayout deviceType={deviceType} {...pageProps}>
              <Routes {...pageProps} />
            </AppLayout>
            <GlobalStyle />
          </Router>
        </IntlProvider>
      </ThemeProvider>
    </Provider>
  );
};
App.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req, query } = appContext.ctx;
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { ...appProps, userAgent, query };
};
export default App;

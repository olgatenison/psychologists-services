import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Provider } from "react-redux";
import "./index.html";
import "./index.scss";
import { store } from "./reducers";
import GlobalStyles from "./style/globalStyles";
import { ThemeProvider, Global } from "@emotion/react";
import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);

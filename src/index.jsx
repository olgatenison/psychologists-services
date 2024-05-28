import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
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
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </Provider>
);

import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import GlobalStyles from "./style/globalStyles";

import "./index.html";
import "./index.scss";
import { Provider } from "react-redux";
import { store } from "./reducers";
import { ThemeProvider, Global } from "@emotion/react";
import { greenTheme } from "./theme/theme";

// import { mult, sum } from "./modules/calk";
// import plant from "./img/third.jpg";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ThemeProvider theme={greenTheme}>
      <Global styles={GlobalStyles} />
      <App />
    </ThemeProvider>
  </Provider>
);

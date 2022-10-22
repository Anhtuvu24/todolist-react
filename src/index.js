import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "./Component/ThemeProvider";
import { Provider } from "react-redux";

import store from "./app/store";
import "./CSS/index.css";

ReactDOM.render(
  <Provider store={store}>
    <div className="Container">
      <ThemeProvider />
    </div>
  </Provider>,
  document.getElementById("root")
);


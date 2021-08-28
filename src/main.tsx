import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Root from "./app/Root";
import store from "./app/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Root store={store} />
  </StrictMode>,
  rootElement
);

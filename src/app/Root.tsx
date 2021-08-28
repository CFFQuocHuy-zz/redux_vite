import React, { useState } from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "../App";
import GlobalStyle from "./Style";

const Root = ({ store }: any) => {
  const [themeS] = useState({});

  return (
    <Provider store={store}>
      <ThemeProvider theme={themeS}>
        <App />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};
export default Root;

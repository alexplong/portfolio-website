/** @format */

import "./style-classes.css";
import "./style.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SitePropsContextProvider } from "./trash/context/SitePropsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SitePropsContextProvider>
      <App />
    </SitePropsContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

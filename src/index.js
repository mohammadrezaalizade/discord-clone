import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserauthContextProvider } from "./context/userAuthContext";
import { ModalStatusContextProvider } from "./context/modalContext";
import { ServerContextProvider } from "./context/serverContext";

ReactDOM.render(
  <React.StrictMode>
    <ServerContextProvider>
      <UserauthContextProvider>
        <ModalStatusContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ModalStatusContextProvider>
      </UserauthContextProvider>
    </ServerContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

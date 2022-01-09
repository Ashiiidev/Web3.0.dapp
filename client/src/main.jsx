import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionProvider } from "./context/TransactionContext"
import "./index.css";

ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root"),
);
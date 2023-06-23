import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ToastSyled } from "./components/Toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
      <ToastSyled />
  </React.StrictMode>
);

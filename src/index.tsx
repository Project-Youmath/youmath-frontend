import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
// import { App } from "./app";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  // <BrowserRouter>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  // </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App";
import store from "./redux/store";

ReactDOM.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

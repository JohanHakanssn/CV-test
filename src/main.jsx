import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { legacy_createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./reducers/counter.js";

const store = legacy_createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

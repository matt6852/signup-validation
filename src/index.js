import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";


import App from './App';
// redux stuff

import { createStore } from "redux";
import reducer from "./reducer";
const initialState = {
  formData: {},
};
const store = createStore(reducer, initialState);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

;

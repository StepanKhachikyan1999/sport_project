import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

// redux
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./redux/rootReducer";

// custom imports


const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
))

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </Provider>,
  document.getElementById("root")
);
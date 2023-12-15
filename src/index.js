import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainApp from "./containers/MainApp";
import { Provider } from "react-redux";
import { searchRobotsReducer, requestRobotsReducer } from "./reducers";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk'


// adding a redux middleware Logger to log the action and next state, etc
const logger = createLogger();

// combine all reducers into a root reducer
const rootReducer = combineReducers({ searchRobotsReducer, requestRobotsReducer})

//const store = createStore(rootReducer);

//redux "createStore" is now deprecated and hence we will use configureStore from redux-toolkit
// thunkMiddleware is for handling async actions
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//const store = configureStore(searchRobotsReducer);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainApp />
    </Provider>
  </React.StrictMode>
);

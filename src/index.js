import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//install redux-promise to help us handle ajax requests
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

//insert (ReduxPromise) to hook a middleware into our redux process
//middlleware is our function that take an action
// and depanding on the action's type and the actions payload
//orany other number of factors the middleware can choose to let
//the action pass through. It can manipulate and modify the action
//It can console.log or stop it, we can do all these
//different types of little tasks on these actions before they reach any reducers
//So you can kind of think of these middleware as gatekeepers of sorts
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));

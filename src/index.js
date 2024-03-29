import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from '../src/reducers/objectiverReducer'; 
import SideBar from '../src/components/SideBar';

//created store and passed in reducer and a default state
const store =  createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
      <SideBar/>
    </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();

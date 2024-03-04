import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from  'react-router-dom'
import {Provider} from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import StudentSlice from './redux/StudentSlice';
import MessageSlice from './redux/MessageSlice';
import QueSlice from './redux/QueSlice'
import AnsSlice from './redux/AnsSlice'
import RandArrSlice from './redux/RandArrSlice'

let rootReducer = combineReducers({StudentSlice, MessageSlice, QueSlice, AnsSlice, RandArrSlice})

let store = configureStore({
  reducer : rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

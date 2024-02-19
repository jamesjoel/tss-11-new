import React from 'react'
import ReactDom  from 'react-dom/client'
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import EmployeeSlice from './redux/EmployeeSlice';

let store = configureStore({
    reducer : EmployeeSlice
})


let root = ReactDom.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>

    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>
)
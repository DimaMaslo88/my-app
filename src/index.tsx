
import state, {StateType} from "./components/redux/store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyFirstProject from './MyFirstProject';
import store from "./components/redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";





    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>
        <MyFirstProject
        />
            </Provider>,
        </BrowserRouter>,
        document.getElementById('root')
    );




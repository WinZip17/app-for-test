import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Provider} from "react-redux";
import store from "./reducers/ReduxStore"
import AppData from "./App";


ReactDOM.render(
    <Provider store={store}>
        <AppData />
    </Provider>, document.getElementById('root'));


serviceWorker.unregister();

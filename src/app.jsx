import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

import style from './app.css';

const App = () => {
    return (
        <Provider store={store}>
            <div className={style.app}>React starter</div>
        </ Provider>
    );
};

export default hot(module)(App);

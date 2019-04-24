import React from 'react';
import ReactDOM from 'react-dom';


import MainPageComponents from './components/MainPageComponents'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root2'));
ReactDOM.render(<MainPageComponents />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

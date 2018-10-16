import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <App className='h-100'/>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
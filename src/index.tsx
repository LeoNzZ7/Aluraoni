import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';;
import { AppRouter } from 'routes';
import { Menu } from 'components/menu';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

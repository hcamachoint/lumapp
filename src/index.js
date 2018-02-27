import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes'; //RUTAS
import registerServiceWorker from './registerServiceWorker';
import './index.css'; //ESTILOS

render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();

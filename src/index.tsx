import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import {store} from './store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {fetchCameraListData} from './store/service/api-action/api-action.ts';

store.dispatch(fetchCameraListData());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>
);


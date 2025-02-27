import React from 'react';
import ReactDOM from 'react-dom/client';

import {createAPI} from './api/api.ts';

import App from './app';
import {store} from './store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {fetchCameraListData} from './store/service/api-action/api-action.ts';
import {ApiRoutes} from './api/api-routes.ts';
import {useAppSelector} from './app/hooks/hooks.ts';
import {getCamerasList} from './store/slice/camera-slice/service/camera-selectors.ts';

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

console.log(createAPI().get(ApiRoutes.CAMERAS));
console.log(useAppSelector(getCamerasList));

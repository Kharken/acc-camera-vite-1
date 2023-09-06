import rootReducer from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../api/api.ts';

const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});

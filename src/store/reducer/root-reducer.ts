import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../namespace/namespace.ts';
import cameraSlice from '../slice/camera-slice';
import reviewSlice from '../slice/review-slice';
import basketSlice from '../slice/basket-slice/service/basket-slice.ts';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
  [Namespace.Review]: reviewSlice.reducer,
  [Namespace.Basket]: basketSlice.reducer,
});

export default rootReducer;

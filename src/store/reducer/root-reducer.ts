import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../namespace/namespace.ts';
import cameraSlice from '../slice/camera-slice';
import reviewSlice from '../slice/review-slice';
import promoSlice from '../slice/promo-slice';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
  [Namespace.Review]: reviewSlice.reducer,
  [Namespace.Promo]: promoSlice.reducer,
});

export default rootReducer;

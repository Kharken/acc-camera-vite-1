import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../namespace/namespace.ts';
import cameraSlice from '../slice/camera-slice';
import reviewSlice from '../slice/review-slice';
import basketSlice from '../slice/basket-slice/service/basket-slice.ts';
import promoSlice from '../slice/promo-slice/service';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
  [Namespace.Review]: reviewSlice.reducer,
  [Namespace.Basket]: basketSlice.reducer,
  [Namespace.Promo]: promoSlice.reducer,
});

export default rootReducer;

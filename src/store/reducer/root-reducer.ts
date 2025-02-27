import {combineReducers} from '@reduxjs/toolkit';
import {Namespace} from '../namespace/namespace.ts';
import cameraSlice from '../slice/camera-slice';

const rootReducer = combineReducers({
  [Namespace.Camera]: cameraSlice.reducer,
});

export default rootReducer;

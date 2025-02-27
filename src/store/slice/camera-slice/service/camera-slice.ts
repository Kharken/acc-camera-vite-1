import {CameraInitialState} from '../types/types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {fetchCameraListData} from '../../../service/api-action/api-action.ts';

const initialState: CameraInitialState = {
  camera: []
};

const cameraSlice = createSlice({
  name: Namespace.Camera,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchCameraListData.fulfilled, (state, action) => {
        state.camera = action.payload;
      });
  }
});

export default cameraSlice;

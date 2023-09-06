import {CameraInitialState} from '../types/types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {fetchCameraListData, fetchCurrentCamera} from '../../../service/api-action/api-action.ts';

const initialState: CameraInitialState = {
  camera: [],
  currentCamera: undefined,
  isCameraLoading: false,
  isCurrentCameraLoading: false,
};

const cameraSlice = createSlice({
  name: Namespace.Camera,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchCameraListData.pending, (state) => {
        state.isCameraLoading = true;
      })
      .addCase(fetchCameraListData.fulfilled, (state, action) => {
        state.camera = action.payload;
        state.isCameraLoading = false;
      })
      .addCase(fetchCameraListData.rejected, (state) => {
        state.isCameraLoading = false;
      })
      .addCase(fetchCurrentCamera.pending, (state) => {
        state.isCurrentCameraLoading = true;
      })
      .addCase(fetchCurrentCamera.fulfilled, (state, action) => {
        state.currentCamera = action.payload;
        state.isCurrentCameraLoading = false;
      })
      .addCase(fetchCurrentCamera.rejected, (state) => {
        state.isCurrentCameraLoading = false;
      });
  }
});

export default cameraSlice;
export {initialState as cameraInitialState};

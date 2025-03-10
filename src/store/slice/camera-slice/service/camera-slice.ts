import {CameraInitialState} from '../types/types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {
  fetchCameraListData,
  fetchCurrentCamera,
  fetchSimilarCameraList
} from '../../../service/api-action/api-action.ts';

const initialState: CameraInitialState = {
  camera: [],
  currentCamera: undefined,
  similarCamera: [],
  isCameraLoading: false,
  isCurrentCameraLoading: false,
  isSimilarCameraLoading: false,
  activeCard: null,
  isModalOpen: false,
};

const cameraSlice = createSlice({
  name: Namespace.Camera,
  initialState,
  reducers: {
    setActiveCard: (state, action: PayloadAction<number | null>) => {
      state.activeCard = action.payload;
    },
    openModal: (state, action: PayloadAction<number | null>) => {
      state.activeCard = action.payload;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.activeCard = null;
      state.isModalOpen = false;
    },
  },
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
      })
      .addCase(fetchSimilarCameraList.pending, (state) => {
        state.isSimilarCameraLoading = true;
      })
      .addCase(fetchSimilarCameraList.fulfilled, (state, action) => {
        state.similarCamera = action.payload;
        state.isSimilarCameraLoading = false;
      })
      .addCase(fetchSimilarCameraList.rejected, (state) => {
        state.isSimilarCameraLoading = false;
      })
    ;
  }
});

export default cameraSlice;
export const {setActiveCard, openModal, closeModal } = cameraSlice.actions;

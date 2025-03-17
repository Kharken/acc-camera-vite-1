import {describe, expect} from 'vitest';
import {CameraInitialState} from '../types/types.ts';
import cameraSlice from '../index.ts';
import {fetchCameraListData} from '../../../service/api-action/api-action.ts';

describe('Camera Slice', () => {
  it('should return default state with empty action', () => {
    const emptyAction = {
      type: '',
    };

    const expectedState: CameraInitialState = {
      camera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = cameraSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default state with empty action and undefined initial state', () => {
    const emptyAction = {
      type: '',
    };

    const expectedState: CameraInitialState = {
      camera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    };

    const result = cameraSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return "isCameraLoading === true" when action is "fetchCameraListData.pending"', () => {
    const expectedState: CameraInitialState = {
      camera: [],
      currentCamera: undefined,
      isCameraLoading: true,
      isCurrentCameraLoading: false,
    };

    const result = cameraSlice.reducer(undefined, fetchCameraListData.pending);

    expect(result).toEqual(expectedState);
  });

  it('should return "isCameraLoading === false" when action is "fetchCameraListData.rejected" or "fetchCameraListData.fulfilled"', () => {
    const expectedState: CameraInitialState = {
      camera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    };

    const resultFulfilled = cameraSlice.reducer(undefined, fetchCameraListData.fulfilled).isCameraLoading;
    const resultRejected = cameraSlice.reducer(undefined, fetchCameraListData.rejected);

    expect(resultFulfilled).toEqual(expectedState.isCameraLoading);
    expect(resultRejected).toEqual(expectedState);
  });
});

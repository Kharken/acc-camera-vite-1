import {describe, expect} from 'vitest';
import {CameraInitialState} from '../types/types.ts';
import cameraSlice from '../index.ts';
import {fetchCameraListData} from '../../../service/api-action/api-action.ts';
import {getFakeCamera} from '../../../mocks/mocks.ts';

describe('Camera Slice', () => {
  it('should return default state with empty action', () => {
    const emptyAction = {
      type: '',
    };

    const expectedState: CameraInitialState = {
      camera: [],
      actualCamera: [],
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
      actualCamera: [],
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
      actualCamera: [],
      currentCamera: undefined,
      isCameraLoading: true,
      isCurrentCameraLoading: false,
    };

    const result = cameraSlice.reducer(undefined, fetchCameraListData.pending);

    expect(result).toEqual(expectedState);
  });

  it('should return "isCameraLoading === false" and payload when action is "fetchCameraListData.fulfilled"', () => {
    const fakeCameraList = getFakeCamera();

    const expectedState: CameraInitialState = {
      camera: [fakeCameraList],
      actualCamera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    };

    const resultFulfilled = cameraSlice.reducer(undefined, fetchCameraListData.fulfilled([fakeCameraList], '', undefined));

    expect(resultFulfilled).toEqual(expectedState);
  });
  it('should return "isCameraLoading === false" and empty payload when action is "fetchCameraListData.rejected"', () => {

    const expectedState: CameraInitialState = {
      camera: [],
      actualCamera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    };

    const resultRejected = cameraSlice.reducer(undefined, fetchCameraListData.rejected);

    expect(resultRejected).toEqual(expectedState);
  });
});

import {describe, expect} from 'vitest';
import {getCamerasList, getCurrentCamera, getCurrentCameraLoadingStatus, getCameraLoadingStatus} from './camera-selectors.ts';
import {Namespace} from '../../../namespace/namespace.ts';
import {StateType} from '../../../service/types/types.ts';

describe('Camera Selectors', () => {
  const state: Pick<StateType, Namespace.Camera> = {
    [Namespace.Camera]: {
      camera: [],
      actualCamera: [],
      currentCamera: undefined,
      isCameraLoading: false,
      isCurrentCameraLoading: false,
    }
  };

  it('should return initial state', () => {
    const resultCamera = getCamerasList(state);
    const resultCurrentCamera = getCurrentCamera(state);
    const resultCameraLoadingStatus = getCameraLoadingStatus(state);
    const resultCurrentCameraLoadingStatus = getCurrentCameraLoadingStatus(state);

    expect(resultCamera).toEqual([]);
    expect(resultCurrentCamera).toBe(undefined);
    expect(resultCameraLoadingStatus).toBe(false);
    expect(resultCurrentCameraLoadingStatus).toBe(false);
  });
});

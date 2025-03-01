import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getCamerasList = (state: StateType) => state[Namespace.Camera].camera;

export const getCurrentCamera = (state: StateType) => state[Namespace.Camera].currentCamera;

export const getCameraLoadingStatus = (state: StateType) => state[Namespace.Camera].isCameraLoading;

export const getCurrentCameraLoadingStatus = (state: StateType) => state[Namespace.Camera].isCurrentCameraLoading;

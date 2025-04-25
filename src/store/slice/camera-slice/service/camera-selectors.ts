import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getCamerasList = (state: Pick<StateType, Namespace.Camera>) => state[Namespace.Camera].camera;

export const getCurrentCamera = (state: Pick<StateType, Namespace.Camera>) => state[Namespace.Camera].currentCamera;

export const getCameraLoadingStatus = (state: Pick<StateType, Namespace.Camera>) => state[Namespace.Camera].isCameraLoading;

export const getCurrentCameraLoadingStatus = (state: Pick<StateType, Namespace.Camera>) => state[Namespace.Camera].isCurrentCameraLoading;

export const getActualCamera = (state: Pick<StateType, Namespace.Camera>) => state[Namespace.Camera].actualCamera;

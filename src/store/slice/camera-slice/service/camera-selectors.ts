import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getCamerasList = (state: StateType) => state[Namespace.Camera].camera;

export const getCurrentCamera = (state: StateType) => state[Namespace.Camera].currentCamera;

export const getSimilarCamerasList = (state: StateType) => state[Namespace.Camera].similarCamera;

export const getCameraLoadingStatus = (state: StateType) => state[Namespace.Camera].isCameraLoading;

export const getCurrentCameraLoadingStatus = (state: StateType) => state[Namespace.Camera].isCurrentCameraLoading;

export const getSimilarCamerasLoadingStatus = (state: StateType) => state[Namespace.Camera].isSimilarCameraLoading;

export const getActiveCard = (state: StateType) => state[Namespace.Camera].activeCard;

export const getModalOpenStatus = (state: StateType) => state[Namespace.Camera].isModalOpen;

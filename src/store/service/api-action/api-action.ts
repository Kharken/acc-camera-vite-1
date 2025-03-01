import {createAsyncThunk} from '@reduxjs/toolkit';
import {createAPI} from '../../../api/api.ts';
import {Camera} from '../../slice/camera-slice/types/types.ts';
import {ApiRoutes} from '../../../api/api-routes.ts';
import {toast} from 'react-toastify';

const api = createAPI();

export const fetchCameraListData = createAsyncThunk<Camera[], undefined>(
  'camera/fetchCameraListData',
  async (): Promise<Camera[]> => {
    const {data} = await api.get<Camera[]>(ApiRoutes.CAMERAS);
    try {
      return data;
    } catch(error) {
      toast.warn('Error fetching cameras');
    }
    return data;
  }
);

export const fetchCurrentCamera = createAsyncThunk<Camera | undefined, string>(
  'camera/fetchCurrentCamera',
  async (cameraId: string): Promise<Camera | undefined> => {
    const {data} = await api.get<Camera | undefined>(`${ApiRoutes.CAMERAS}/${cameraId}`);
    try {
      return data;
    } catch(error) {
      toast.warn('Error fetching cameras');
    }
    return data;
  }
);

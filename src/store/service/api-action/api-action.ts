import {createAsyncThunk} from '@reduxjs/toolkit';
import {createAPI} from '../../../api/api.ts';
import {Camera} from '../../slice/camera-slice/types/types.ts';
import {ApiRoutes} from '../../../api/api-routes.ts';
import {toast} from 'react-toastify';
import {ReviewType} from '../../slice/review-slice/types/types.ts';
import {OrderType} from '../types/types.ts';
import {Promo} from '../../slice/promo-slice/types/types.ts';

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

export const fetchReviewData = createAsyncThunk<ReviewType[] | undefined, string>(
  'review/fetchReviewData',
  async (cameraId: string): Promise<ReviewType[] | undefined> => {
    const {data} = await api.get<ReviewType[]>(`${ApiRoutes.CAMERAS}/${cameraId}/reviews`);
    try {
      return data;
    } catch(error) {
      toast.warn('Error fetching review data');
    }
  }
);

export const postOrderAction = createAsyncThunk<void, OrderType, { rejectValue: string }>(
  'order/postOrder',
  async (requestData: OrderType, { rejectWithValue }) => {
    try {
      await api.post(ApiRoutes.ORDERS, requestData);
    } catch (error) {
      return rejectWithValue('Не удалось оформить заказ. Попробуйте снова.');
    }
  }
);


export const fetchPromoListData = createAsyncThunk<Promo[], undefined>(
  'promo/fetchPromoListData',
  async (): Promise<Promo[]> => {
    const {data} = await api.get<Promo[]>(ApiRoutes.PROMO);
    try {
      return data;
    } catch(error) {
      toast.warn('Error fetching promo');
    }
    return data;
  }
);

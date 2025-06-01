import { createSlice } from '@reduxjs/toolkit';
import { postOrderAction} from '../../../service/api-action/api-action.ts';
import {OrderState} from '../types/types.ts';

const initialState: OrderState = {
  loading: false,
  error: null,
  success: false,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrderAction.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(postOrderAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? 'Неизвестная ошибка';
      });
  },
});

export const { resetOrderState } = orderSlice.actions;
export default orderSlice;

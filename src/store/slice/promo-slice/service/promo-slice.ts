import {PromoInitialState} from '../types/types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {fetchPromoListData} from '../../../service/api-action/api-action.ts';

const initialState: PromoInitialState = {
  promo: [],
};

const promoSlice = createSlice({
  name: Namespace.Promo,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchPromoListData.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});

export default promoSlice;


import {getFromLocalStorage} from '../../../../pages/catalog-page/utils';
import {CAMERA_CART_LOCALSTORAGE_KEY} from '../../../../utils/const/const.ts';
import {BasketState} from '../types/types.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {Camera} from '../../camera-slice/types/types.ts';

const initialState: BasketState = {
  basketData: getFromLocalStorage(CAMERA_CART_LOCALSTORAGE_KEY),
};

const basketSlice = createSlice({
  name: Namespace.Basket,
  initialState,
  reducers: {
    setBasketData: (state: BasketState, action: PayloadAction<Camera[]>) => {
      state.basketData = action.payload;
    },
    getBasketData: (state: BasketState, action: PayloadAction<Camera[]>) => {
      state.basketData = action.payload;
    }
  }
});

export const {setBasketData, getBasketData} = basketSlice.actions;

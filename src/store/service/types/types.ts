import {store} from '../../index.ts';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

export type OrderType = {
  camerasIds: number[];
  coupon: string | null;
  tel: string;
};

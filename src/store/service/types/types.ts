import {store} from '../../index.ts';

export type StateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;

type CouponType = 'camera-333'|'camera-444'|'camera-555';

export type OrderType = {
  camerasIds: number[];
  coupon?: CouponType | null;
  tel?: string;
};

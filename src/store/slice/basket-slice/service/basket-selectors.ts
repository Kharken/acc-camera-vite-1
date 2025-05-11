import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getBasketCameraList = (state: Pick<StateType, Namespace.Basket>) => state[Namespace.Basket].basketData;

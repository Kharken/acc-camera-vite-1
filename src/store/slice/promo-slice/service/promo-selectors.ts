import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getPromoCameraList = (state: StateType) => state[Namespace.Promo].promo;

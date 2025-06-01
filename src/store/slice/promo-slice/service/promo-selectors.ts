import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getPromoList = (state: Pick<StateType, Namespace.Promo>) => state[Namespace.Promo].promo;

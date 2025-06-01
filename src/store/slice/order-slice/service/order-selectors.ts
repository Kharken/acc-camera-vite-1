import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getOrderLoading = (state: StateType) => state[Namespace.Order].loading;
export const getOrderError = (state: StateType) => state[Namespace.Order].error;
export const getOrderSuccess = (state: StateType) => state[Namespace.Order].success;

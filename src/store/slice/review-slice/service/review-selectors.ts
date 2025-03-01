import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getReviewList = (state: StateType) => state[Namespace.Review].review;

export const getReviewLoadingStatus = (state: StateType) => state[Namespace.Review].isReviewLoading;

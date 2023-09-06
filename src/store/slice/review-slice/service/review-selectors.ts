import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

export const getReviewList = (state: Pick<StateType, Namespace.Review>) => state[Namespace.Review].review;

export const getReviewLoadingStatus = (state: Pick<StateType, Namespace.Review>) => state[Namespace.Review].isReviewLoading;

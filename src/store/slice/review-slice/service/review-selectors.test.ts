import {describe, expect} from 'vitest';
import {getReviewList, getReviewLoadingStatus} from './review-selectors.ts';
import {StateType} from '../../../service/types/types.ts';
import {Namespace} from '../../../namespace/namespace.ts';

describe('Review Selectors', () => {
  const state: Pick<StateType, Namespace.Review> = {
    [Namespace.Review]: {
      review: [],
      isReviewLoading: false,
    }
  };

  it('should return initial state', () => {
    const resultReview = getReviewList(state);
    const resultReviewLoadingStatus = getReviewLoadingStatus(state);

    expect(resultReview).toEqual([]);
    expect(resultReviewLoadingStatus).toBe(false);
  });
});

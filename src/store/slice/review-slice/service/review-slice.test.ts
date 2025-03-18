import {describe, expect} from 'vitest';
import {ReviewInitialState} from '../types/types.ts';
import reviewSlice from '../index.ts';
import {fetchReviewData} from '../../../service/api-action/api-action.ts';
import {getFakeReview} from '../../../mocks/mocks.ts';


describe('Review Slice', () => {
  it('should return default state with empty action', () => {
    const emptyAction = {
      type: '',
    };
    const expectedState: ReviewInitialState = {
      review: [],
      isReviewLoading: false,
    };

    const result = reviewSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default state with empty action and undefined initial state', () => {
    const emptyAction = {
      type: '',
    };
    const expectedState: ReviewInitialState = {
      review: [],
      isReviewLoading: false,
    };

    const result = reviewSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should return "isReviewLoading === true" when action is "fetchReviewData.pending"', () => {
    const expectedState: ReviewInitialState = {
      review: [],
      isReviewLoading: true,
    };

    const result = reviewSlice.reducer(undefined, fetchReviewData.pending);

    expect(result).toEqual(expectedState);
  });

  it('should return "isReviewLoading === false" and payload when action is "fetchReviewData.fulfilled"', () => {
    const fakeCameraList = getFakeReview();

    const expectedState: ReviewInitialState = {
      review: [fakeCameraList],
      isReviewLoading: false,
    };

    const resultFulfilled = reviewSlice.reducer(undefined, fetchReviewData.fulfilled([fakeCameraList], '', ''));

    expect(resultFulfilled).toEqual(expectedState);
  });
  it('should return "isReviewLoading === false" and empty payload when action is "fetchReviewData.rejected"', () => {

    const expectedState: ReviewInitialState = {
      review: [],
      isReviewLoading: false,
    };

    const resultRejected = reviewSlice.reducer(undefined, fetchReviewData.rejected);

    expect(resultRejected).toEqual(expectedState);
  });
});

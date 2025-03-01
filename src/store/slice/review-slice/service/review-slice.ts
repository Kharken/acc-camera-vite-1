import {ReviewInitialState} from '../types/types.ts';
import {createSlice} from '@reduxjs/toolkit';
import {Namespace} from '../../../namespace/namespace.ts';
import {fetchReviewData} from '../../../service/api-action/api-action.ts';

const initialState: ReviewInitialState = {
  review: [],
  isReviewLoading: false,
};

const reviewSlice = createSlice({
  name: Namespace.Review,
  initialState,
  reducers: {},
  extraReducers(builder){
    builder
      .addCase(fetchReviewData.pending, (state) => {
        state.isReviewLoading = true;
      })
      .addCase(fetchReviewData.fulfilled, (state, action) => {
        state.isReviewLoading = false;
        state.review = action.payload;
      })
      .addCase(fetchReviewData.rejected, (state) => {
        state.isReviewLoading = false;
      });
  }
});

export default reviewSlice;

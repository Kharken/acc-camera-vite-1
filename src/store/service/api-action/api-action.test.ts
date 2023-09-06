import {beforeEach, describe} from 'vitest';
import {createAPI} from '../../../api/api.ts';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {OrderType, StateType} from '../types/types.ts';
import {Action} from '@reduxjs/toolkit';
import {AppThunkDispatch} from '../../../mocks/app-thunk-dispatch.ts';
import {cameraInitialState} from '../../slice/camera-slice/service/camera-slice.ts';
import {reviewInitialState} from '../../slice/review-slice/service/review-slice.ts';
import {getFakeCamera, getFakeReview} from '../../mocks/mocks.ts';
import {ApiRoutes} from '../../../api/api-routes.ts';
import {fetchCameraListData, fetchCurrentCamera, fetchReviewData, postOrderAction} from './api-action.ts';
import {extractActionsTypes} from '../../../mocks/extract-action-types.ts';


describe('ApiAction', () => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<StateType, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    mockAxiosAdapter.reset();
    store = mockStoreCreator({Camera: cameraInitialState, Review: reviewInitialState});
  });

  describe('fetchCameraListData', () => {
    it('Should dispatch "fetchCameraListData.pending" and "fetchCameraListData.fulfilled" when server response 200', async () => {
      const fakeCameraListItem = getFakeCamera();
      mockAxiosAdapter.onGet(ApiRoutes.CAMERAS).reply(200, [fakeCameraListItem]);

      await store.dispatch(fetchCameraListData());

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchCameraListDataFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCameraListData.fulfilled>;

      expect(fetchCameraListDataFulfilled.payload).toEqual([fakeCameraListItem]);
      expect(extractedActions).toEqual([
        fetchCameraListData.pending.type,
        fetchCameraListData.fulfilled.type,
      ]);

    });
  });

  describe('fetchCameraListData', () => {
    it('Should dispatch "fetchCameraListData.pending" and "fetchCameraListData.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(ApiRoutes.CAMERAS).reply(400, []);

      await store.dispatch(fetchCameraListData());

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchCameraListDataRejected = emittedActions.at(1) as ReturnType<typeof fetchCameraListData.rejected>;

      expect(fetchCameraListDataRejected.payload).toEqual(undefined);
      expect(extractedActions).toEqual([
        fetchCameraListData.pending.type,
        fetchCameraListData.rejected.type,
      ]);

    });
  });

  describe('fetchCurrentCamera', () => {
    it('Should dispatch "fetchCurrentCamera.pending" and "fetchCurrentCamera.fulfilled" when server response 200', async () => {
      const cameraId = getFakeCamera().id.toString();
      const fakeCamera = getFakeCamera();
      mockAxiosAdapter.onGet(`${ApiRoutes.CAMERAS}/${cameraId}`).reply(200, fakeCamera);

      await store.dispatch(fetchCurrentCamera(cameraId));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchCurrentCameraFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCurrentCamera.fulfilled>;

      expect(fetchCurrentCameraFulfilled.payload).toEqual(fakeCamera);
      expect(extractedActions).toEqual([
        fetchCurrentCamera.pending.type,
        fetchCurrentCamera.fulfilled.type,
      ]);

    });
  });

  describe('fetchCurrentCamera', () => {
    it('Should dispatch "fetchCameraListData.pending" and "fetchCameraListData.rejected" when server response 400', async () => {
      const cameraId = getFakeCamera().id.toString();
      mockAxiosAdapter.onGet(`${ApiRoutes.CAMERAS}/${cameraId}`).reply(400, undefined);

      await store.dispatch(fetchCurrentCamera(cameraId));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchCurrentCameraRejected = emittedActions.at(1) as ReturnType<typeof fetchCameraListData.rejected>;

      expect(fetchCurrentCameraRejected.payload).toEqual(undefined);
      expect(extractedActions).toEqual([
        fetchCurrentCamera.pending.type,
        fetchCurrentCamera.rejected.type,
      ]);

    });
  });

  describe('fetchReviewData', () => {
    it('Should dispatch "fetchReviewData.pending" and "fetchReviewData.fulfilled" when server response 200', async () => {
      const cameraId = getFakeCamera().id.toString();
      const fakeReview = getFakeReview();
      mockAxiosAdapter.onGet(`${ApiRoutes.CAMERAS}/${cameraId}/reviews`).reply(200, [fakeReview]);

      await store.dispatch(fetchReviewData(cameraId));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchReviewDataFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewData.fulfilled>;

      expect(fetchReviewDataFulfilled.payload).toEqual([fakeReview]);
      expect(extractedActions).toEqual([
        fetchReviewData.pending.type,
        fetchReviewData.fulfilled.type,
      ]);

    });
  });

  describe('fetchReviewData', () => {
    it('Should dispatch "fetchReviewData.pending" and "fetchReviewData.rejected" when server response 400', async () => {
      const cameraId = getFakeCamera().id.toString();
      mockAxiosAdapter.onGet(`${ApiRoutes.CAMERAS}/${cameraId}/reviews`).reply(400, undefined);

      await store.dispatch(fetchCurrentCamera(cameraId));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const fetchReviewDataRejected = emittedActions.at(1) as ReturnType<typeof fetchReviewData.rejected>;

      expect(fetchReviewDataRejected.payload).toEqual(undefined);
      expect(extractedActions).toEqual([
        fetchReviewData.pending.type,
        fetchReviewData.rejected.type,
      ]);

    });
  });

  describe('postOrderAction', () => {
    it('Should dispatch "postOrderAction.pending" and "postOrderAction.fulfilled" when server response 200', async () => {

      const requestData: OrderType = {
        camerasIds: [1],
        coupon: null,
        tel: '+79991232123',
      };
      mockAxiosAdapter.onGet(ApiRoutes.ORDERS, requestData).reply(200, requestData);

      await store.dispatch(postOrderAction(requestData));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const postOrderActionFulfilled = emittedActions.at(1) as ReturnType<typeof postOrderAction.fulfilled>;

      expect(postOrderActionFulfilled.payload).toEqual(requestData);
      expect(extractedActions).toEqual([
        postOrderAction.pending.type,
        postOrderAction.fulfilled.type,
      ]);

    });
  });

  describe('postOrderAction', () => {
    it('Should dispatch "postOrderAction.pending" and "postOrderAction.rejected" when server response 400', async () => {

      const requestData: OrderType = {
        camerasIds: [1],
        coupon: null,
        tel: '+79991232123',
      };
      mockAxiosAdapter.onGet(ApiRoutes.ORDERS, requestData).reply(400, requestData);

      await store.dispatch(postOrderAction(requestData));

      const emittedActions = store.getActions();
      const extractedActions = extractActionsTypes(emittedActions);
      const postOrderActionRejected = emittedActions.at(1) as ReturnType<typeof postOrderAction.rejected>;

      expect(postOrderActionRejected.payload).toEqual(undefined);
      expect(extractedActions).toEqual([
        postOrderAction.pending.type,
        postOrderAction.fulfilled.type,
      ]);

    });
  });

});

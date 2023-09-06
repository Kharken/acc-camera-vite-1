import MockAdapter from 'axios-mock-adapter';
import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../store/service/types/types.ts';
import {createAPI} from '../api/api.ts';
import thunk from 'redux-thunk';
import {Action} from '@reduxjs/toolkit';
import {AppThunkDispatch} from './app-thunk-dispatch.ts';
import {Provider} from 'react-redux';

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

const createWithStoreComponent = (component: JSX.Element, initialState: Partial<StateType> = {}): ComponentWithMockStore => {
  const axios = createAPI();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<StateType, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });

};

export {createWithStoreComponent};

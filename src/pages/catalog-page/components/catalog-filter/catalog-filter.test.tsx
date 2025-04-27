import {describe, expect} from 'vitest';
import CatalogFilter from './catalog-filter';
import {store} from '../../../../store';
import {FilterStateProps} from '../../types/types.ts';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';

describe('Component: CatalogFilter', () => {
  it('should renders correctly', () => {
    const catalogFilterTestId = 'catalog-filter';
    const cameraCategoryTestId = 'camera-category';
    const cameraTypeTestId = 'camera-type';
    const cameraLevelTestId = 'camera-level';
    const priceRangeTestId = 'price-range';

    const initialState: FilterStateProps = {
      category: '',
      type: [],
      level: [],
      priceFrom: '',
      priceTo: '',
    };

    render(
      <Provider store={store}>
        <CatalogFilter onChangeHandler={() => vi.fn()} filter={initialState} setFilter={() => vi.fn()} onChangeResetHandler={() => vi.fn()}/>
      </Provider>);

    const catalogFilter = screen.getByTestId(catalogFilterTestId);
    const cameraCategory = screen.getByTestId(cameraCategoryTestId);
    const cameraType = screen.getByTestId(cameraTypeTestId);
    const cameraLevel = screen.getByTestId(cameraLevelTestId);
    const priceRange = screen.getByTestId(priceRangeTestId);

    expect(catalogFilter).toBeInTheDocument();
    expect(cameraCategory).toBeInTheDocument();
    expect(cameraType).toBeInTheDocument();
    expect(cameraLevel).toBeInTheDocument();
    expect(priceRange).toBeInTheDocument();
  });


});

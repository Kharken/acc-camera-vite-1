import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Catalog from './index.ts';
import {createWithStoreComponent} from '../../../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../../../store/slice/camera-slice/service/camera-slice.ts';
import {createRouteComponent} from '../../../../mocks/create-route-component.tsx';

describe('Component: Catalog', () => {
  it('should renders correctly', () => {
    const catalogTestId = 'catalog-content';

    const {withStoreComponent: catalog} = createWithStoreComponent(
      <Catalog
        handleModalOpenClick={() => vi.fn()}
        handleActiveCardMouseOver={() => vi.fn()}
        filter={{
          category: '',
          type: [],
          level: [],
          priceFrom: '',
          priceTo: '',
        }}
      />, {[Namespace.Camera]: cameraInitialState});
    const preparedCatalogPage = createRouteComponent(catalog);

    render(preparedCatalogPage);

    const catalogContent = screen.getByTestId(catalogTestId);

    expect(catalogContent).toBeInTheDocument();
  });
});

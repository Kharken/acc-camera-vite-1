import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import CatalogPage from './index.ts';
import {createRouteComponent} from '../../mocks/create-route-component.tsx';
import {createWithStoreComponent} from '../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../store/slice/camera-slice/service/camera-slice.ts';

describe('Component: CatalogPage', () => {
  it('should renders correctly', () => {
    const catalogPageBannerTestId = 'catalog-page-banner';
    const catalogPageContentTestId = 'catalog-page-content';


    const {withStoreComponent} = createWithStoreComponent(<CatalogPage/>, {[Namespace.Camera]: cameraInitialState});
    const preparedCatalogPage = createRouteComponent(withStoreComponent);

    render(preparedCatalogPage);

    const catalogPageBanner = screen.getByTestId(catalogPageBannerTestId);
    const catalogPageContent = screen.getByTestId(catalogPageContentTestId);

    expect(catalogPageBanner).toBeInTheDocument();
    expect(catalogPageContent).toBeInTheDocument();
  });
});

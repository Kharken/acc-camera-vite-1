import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {createWithStoreComponent} from '../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../store/slice/camera-slice/service/camera-slice.ts';
import {createRouteComponent} from '../../mocks/create-route-component.tsx';
import ProductPage from './index.ts';
import {reviewInitialState} from '../../store/slice/review-slice/service/review-slice.ts';

describe('Component: ProductPage', () => {
  it('should renders correctly', () => {
    const productPageContentTestId = 'product-page-content';

    const {withStoreComponent} = createWithStoreComponent(<ProductPage/>, {[Namespace.Camera]: cameraInitialState, [Namespace.Review]: reviewInitialState});
    const preparedProductPage = createRouteComponent(withStoreComponent);

    render(preparedProductPage);

    const productPageContent = screen.getByTestId(productPageContentTestId);

    expect(productPageContent).toBeInTheDocument();
  });
});

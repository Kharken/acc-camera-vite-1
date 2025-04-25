import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {createRouteComponent} from '../../../../../../../../mocks/create-route-component.tsx';
import ProductCard from './index.ts';
import {getFakeCamera} from '../../../../../../../../store/mocks/mocks.ts';
import userEvent from '@testing-library/user-event';
import {createWithStoreComponent} from '../../../../../../../../mocks/create-with-store-component.tsx';
import CatalogPage from '../../../../../../index.ts';
import CatalogCallItem from '../../../catalog-call-item';
import {Namespace} from '../../../../../../../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../../../../../../../store/slice/camera-slice/service/camera-slice.ts';

describe('Component: ProductCard', () => {

  const fakeCamera = getFakeCamera();
  const fakeActiveCard = 1;
  const fakeClickHandler = vi.fn();
  const fakeMouseOverHandler = vi.fn();

  const preparedProductCard = createRouteComponent(
    <ProductCard props={fakeCamera} handleModalOpenClick={fakeClickHandler} handleActiveCardMouseOver={fakeMouseOverHandler}/>);

  it('should renders correctly', () => {
    const productCardTestId = 'product-card';

    render(preparedProductCard);
    const productCard = screen.getByTestId(productCardTestId);

    expect(productCard).toBeInTheDocument();
  });
  it('should opens modal window by click', async () => {
    const modalOpenButtonTestId = 'modal-open-button';
    const modalOpenedTestId = 'modal-opened';

    const {withStoreComponent: catalogPage} = createWithStoreComponent(<CatalogPage/>, {[Namespace.Camera]: cameraInitialState});
    const preparedCatalogPage = createRouteComponent(catalogPage);

    const {withStoreComponent: catalogCallItem} = createWithStoreComponent(<CatalogCallItem handleModalCloseClick={() => vi.fn()} isModalOpen activeCard={fakeActiveCard}/>, {[Namespace.Camera]: cameraInitialState});
    const preparedCatalogCallItem = createRouteComponent(catalogCallItem);

    render(preparedProductCard);

    const queryOpenedModal = screen.queryByTestId(modalOpenedTestId);

    expect(queryOpenedModal).not.toBeInTheDocument();

    const openButton = screen.getByTestId(modalOpenButtonTestId);
    await userEvent.click(openButton);
    render(preparedCatalogPage);
    render(preparedCatalogCallItem);

    const openedModal = screen.getByTestId(modalOpenedTestId);

    expect(openedModal).toBeInTheDocument();
  });
});

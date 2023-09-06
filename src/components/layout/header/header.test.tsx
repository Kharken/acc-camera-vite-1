import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Header from './header';
import React from 'react';
import {createWithStoreComponent} from '../../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../../store/slice/camera-slice/service/camera-slice.ts';
import {createRouteComponent} from '../../../mocks/create-route-component.tsx';


describe('Component: Header', () => {
  it('should renders correctly', () => {
    const headerNavItemTestId = 'main-nav__item';
    const headerNavTestId = 'main-nav';
    const headerTestId = 'header';
    const logoTestId = 'logo';
    const headerNavItemsCount = 4;

    const headerRef: React.MutableRefObject<HTMLAnchorElement | null> = {
      current: null,
    };

    const {withStoreComponent} = createWithStoreComponent(<Header childRef={headerRef}/>, {[Namespace.Camera]: cameraInitialState});
    const withStoreHeader = createRouteComponent(withStoreComponent);

    render(withStoreHeader);

    const header = screen.getByTestId(headerTestId);
    const headerNav = screen.getByTestId(headerNavTestId);
    const headerNavItems = screen.getAllByTestId(headerNavItemTestId);
    const logo = screen.getByTestId(logoTestId);

    expect(header).toBeInTheDocument();
    expect(headerNav).toBeInTheDocument();
    expect(headerNavItems.length).toBe(headerNavItemsCount);
    expect(logo).toBeInTheDocument();

  });
});

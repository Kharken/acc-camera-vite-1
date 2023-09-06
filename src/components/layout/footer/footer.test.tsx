import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Footer from './index.ts';
import {createRouteComponent} from '../../../mocks/create-route-component.tsx';
import {createWithStoreComponent} from '../../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../../store/namespace/namespace.ts';
import {cameraInitialState} from '../../../store/slice/camera-slice/service/camera-slice.ts';

describe('Component: Footer', () => {
  it('should renders correctly', () => {
    const footerTestId = 'footer';
    const footerNavTestId = 'footer-nav';
    const footerSocialITestId = 'footer-social';
    const logoTestId = 'logo';

    const {withStoreComponent} = createWithStoreComponent(<Footer/>, {[Namespace.Camera]: cameraInitialState});
    const withStoreFooter = createRouteComponent(withStoreComponent);

    render(withStoreFooter);

    const footer = screen.getByTestId(footerTestId);
    const footerNav = screen.getByTestId(footerNavTestId);
    const footerSocial = screen.getByTestId(footerSocialITestId);
    const logo = screen.getByTestId(logoTestId);

    expect(footer).toBeInTheDocument();
    expect(footerNav).toBeInTheDocument();
    expect(footerSocial).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
  });
});

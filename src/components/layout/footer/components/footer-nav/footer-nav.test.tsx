import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import FooterNav from './index.ts';

describe('Component: FooterNav', () => {
  it('should renders correctly', () => {
    const footerNavMenuItemTestId = 'footer-nav-menu-item';
    const footerNavItemTestId = 'footer-nav-item';
    const footerNavTestId = 'footer-nav';

    const footerNavMenuItemCount = 9;
    const footerNavItemCount = 3;

    render(<FooterNav/>);

    const footerNav = screen.getByTestId(footerNavTestId);
    const footerNavItem = screen.getAllByTestId(footerNavItemTestId);
    const footerNavMenuItem = screen.getAllByTestId(footerNavMenuItemTestId);

    expect(footerNav).toBeInTheDocument();
    expect(footerNavItem.length).toBe(footerNavItemCount);
    expect(footerNavMenuItem.length).toBe(footerNavMenuItemCount);
  });
});

import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import FooterSocial from './footer-social.tsx';

describe('Component: FooterSocial', () => {
  it('should renders correctly', () => {
    const footerSocialItemCount = 3;
    const footerSocialItemTestId = 'footer-social-item';
    const footerSocialITestId = 'footer-social';

    render(<FooterSocial/>);

    const footerSocialItem = screen.getAllByTestId(footerSocialItemTestId);
    const footerSocial = screen.getByTestId(footerSocialITestId);

    expect(footerSocial).toBeInTheDocument();
    expect(footerSocialItem.length).toBe(footerSocialItemCount);
  });
});

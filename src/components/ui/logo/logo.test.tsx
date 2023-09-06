
import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import Logo from './index.ts';
import {LogoProps} from './types/types.ts';
import {createRouteComponent} from '../../../mocks/create-route-component.tsx';

describe('Component: Logo', () => {
  it('should renders correctly', () => {
    const logoTestId = 'logo';

    const logoProps: LogoProps = {
      xlinkHrefProp: '-mono',
      classNameProp: 'footer',
    };
    const preparedLogo = createRouteComponent(<Logo xlinkHrefProp={logoProps.xlinkHrefProp} classNameProp={logoProps.classNameProp}/>);

    render(preparedLogo);
    const logo = screen.getByTestId(logoTestId);

    expect(logo).toBeInTheDocument();
  });
});

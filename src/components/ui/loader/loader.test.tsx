import Loader from './index.ts';
import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';


describe('Component: Loader', () => {
  it('should renders correctly', () => {
    const loaderTestId = 'loader';

    render(<Loader />);
    const loader = screen.getByTestId(loaderTestId);

    expect(loader).toBeInTheDocument();
  });
});

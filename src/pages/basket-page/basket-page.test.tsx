import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import BasketPage from './index.ts';

describe('Component: BasketPage', () => {
  it('should renders correctly', () => {
    const basketPageTestId = 'basket-page-content';

    render(<BasketPage />);

    const basketPage = screen.getByTestId(basketPageTestId);

    expect(basketPage).toBeInTheDocument();

  });
});


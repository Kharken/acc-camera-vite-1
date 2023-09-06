import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {createRouteComponent} from '../../mocks/create-route-component.tsx';
import NotFoundPage from './index.ts';

describe('Component: NotFound Page', () => {
  it('should renders correctly', () => {
    const expectedDataText = 'Go to Main Page';
    const preparedComponent = createRouteComponent(<NotFoundPage/>);

    render(preparedComponent);

    const dataText = screen.getByText(expectedDataText);

    expect(dataText).toBeInTheDocument();
  });
});

import {describe, expect} from 'vitest';
import ButtonUp from './index.ts';
import {render, screen} from '@testing-library/react';
import React from 'react';


describe('Component: ButtonUp', () => {
  it('should renders correctly', () => {
    const buttonUpTestId = 'button-up';
    const buttonRef: React.MutableRefObject<HTMLAnchorElement | null> = {
      current: null,
    };

    render(<ButtonUp childRef={buttonRef}/>);
    const buttonUp = screen.getByTestId(buttonUpTestId);

    expect(buttonUp).toBeInTheDocument();
  });
});

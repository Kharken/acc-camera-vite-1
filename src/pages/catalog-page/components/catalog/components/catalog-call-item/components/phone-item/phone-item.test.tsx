import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {createRouteComponent} from '../../../../../../../../mocks/create-route-component.tsx';
import {createWithStoreComponent} from '../../../../../../../../mocks/create-with-store-component.tsx';
import PhoneItem from './index.ts';
import {PhoneItemProps} from '../../../../../../types/types.ts';

describe('Component: PhoneItem', () => {
  const phoneItemTestId = 'phone-input';
  const phoneItemProps: PhoneItemProps = {
    activeCard: 1,
    handleModalCloseClick: vi.fn()
  };

  const {withStoreComponent} = createWithStoreComponent(<PhoneItem handleModalCloseClick={phoneItemProps.handleModalCloseClick} activeCard={phoneItemProps.activeCard}/>, {});
  const preparedPhoneItem = createRouteComponent(withStoreComponent);
  it('should renders correctly', () => {

    render(preparedPhoneItem);
    const phoneItem = screen.getByTestId(phoneItemTestId);

    expect(phoneItem).toBeInTheDocument();
  });

  it('should render correctly when user enter phone number through 8', async () => {
    const userTestPhoneNumberInputValue = '89991232123';
    const expectedPhoneNumberInputValue = '+79991232123';

    render(preparedPhoneItem);

    await userEvent.type(
      screen.getByTestId(phoneItemTestId),
      userTestPhoneNumberInputValue,
    );

    expect(screen.getByDisplayValue(expectedPhoneNumberInputValue)).toBeInTheDocument();
  });
});


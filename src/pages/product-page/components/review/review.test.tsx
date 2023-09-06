import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {createWithStoreComponent} from '../../../../mocks/create-with-store-component.tsx';
import {Namespace} from '../../../../store/namespace/namespace.ts';
import {createRouteComponent} from '../../../../mocks/create-route-component.tsx';
import Review from './index.ts';
import {reviewInitialState} from '../../../../store/slice/review-slice/service/review-slice.ts';
import ReviewCard from './components/review-card';
import {getFakeReview} from '../../../../store/mocks/mocks.ts';

describe('Component: Review', () => {
  it('should renders correctly', () => {
    const reviewCardTestId = 'review-card';
    const reviewTestId = 'review-list';
    const fakeReview = getFakeReview();
    const startReviewsCount = 0;

    const {withStoreComponent: review} = createWithStoreComponent(<Review startReviewsCount={startReviewsCount}/>, {[Namespace.Review]: reviewInitialState});
    const preparedReview = createRouteComponent(review);

    render(preparedReview);
    render(<ReviewCard props={fakeReview}/>);

    const reviewElement = screen.getByTestId(reviewTestId);
    const reviewCardElement = screen.getByTestId(reviewCardTestId);

    expect(reviewElement).toBeInTheDocument();
    expect(reviewCardElement).toBeInTheDocument();
  });
});

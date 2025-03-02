import ReviewCard from './components/review-card';
import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getReviewList} from '../../../store/slice/review-slice/service/review-selectors.ts';
import {ReviewProps} from './types/types.ts';

const Review = ({startReviewsCount}: ReviewProps) => {
  const reviewList = useAppSelector(getReviewList);

  return(
    <ul className="review-block__list">
      {reviewList && reviewList.map((item) => <ReviewCard key={item.id} props={item} />).slice(0, startReviewsCount) }
    </ul>
  );
};

export default Review;

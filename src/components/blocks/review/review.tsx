import ReviewCard from './components/review-card';
import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getReviewList} from '../../../store/slice/review-slice/service/review-selectors.ts';

const Review = () => {
  const reviewList = useAppSelector(getReviewList);

  return(
    <ul className="review-block__list">
      {reviewList && reviewList.map((item) => <ReviewCard key={item.id} props={item} />) }
    </ul>
  );
};

export default Review;

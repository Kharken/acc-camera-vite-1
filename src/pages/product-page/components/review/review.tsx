import ReviewCard from './components/review-card';
import {useAppSelector} from '../../../../app/hooks/hooks.ts';
import {getReviewList} from '../../../../store/slice/review-slice/service/review-selectors.ts';
import {ReviewProps} from './types/types.ts';
import {getSortedList} from '../../../../utils/get-sorted-list.ts';
import dayjs from 'dayjs';

const Review = ({startReviewsCount}: ReviewProps) => {
  const reviewList = useAppSelector(getReviewList);
  const onDateSortedReviewList = reviewList && getSortedList(reviewList, (a, b) => dayjs(b.createAt).unix() - dayjs(a.createAt).unix());

  return(
    <ul className="review-block__list">
      {onDateSortedReviewList && onDateSortedReviewList.map((item) => <ReviewCard key={item.id} props={item} />).slice(0, startReviewsCount) }
    </ul>
  );
};

export default Review;

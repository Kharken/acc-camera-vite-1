import dayjs from 'dayjs';
import 'dayjs/locale/ru.js';

dayjs.locale('ru');


import {ReviewCardProps} from './types/types.ts';

const ReviewCard = ({props}: ReviewCardProps) => {
  const {userName, advantage, disadvantage, rating, review, createAt} = props;
  const dateOfReview = dayjs(createAt).format('DD MMMM');

  return(
    <li className="review-card" data-testid="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data"
          dateTime="2022-04-13"
        >{dateOfReview}
        </time>
      </div>
      <div className="rate review-card__rate">
        <svg width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <svg width="17"
          height="16"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-full-star"></use>
        </svg>
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}
          </p>
        </li>
      </ul>
    </li>
  );
};

export default ReviewCard;

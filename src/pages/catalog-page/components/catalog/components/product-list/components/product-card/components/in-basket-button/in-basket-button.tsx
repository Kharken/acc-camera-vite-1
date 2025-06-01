import {Link} from 'react-router-dom';
import {RoutePath} from '../../../../../../../../../../app/route-path/route-path.ts';

const InBasketButton = () => (
  <Link className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
    to={`${RoutePath.Basket}`}
  >
    <svg width="16"
      height="16"
      aria-hidden="true"
    >
      <use xlinkHref="#icon-basket"></use>
    </svg>
      В корзине
  </Link>
);

export default InBasketButton;

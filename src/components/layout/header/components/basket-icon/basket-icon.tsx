import {Link} from 'react-router-dom';
import {RoutePath} from '../../../../../app/route-path/route-path.ts';


const BasketIcon = () => (
  <Link className="header__basket-link"
    to={RoutePath.Basket}
  >
    <svg width="16"
      height="16"
      aria-hidden="true"
    >
      <use xlinkHref="#icon-basket"></use>
    </svg>
  </Link>
);

export default BasketIcon;

import {Link} from 'react-router-dom';
import {RoutePath} from '../../../../../app/route-path/route-path.ts';
import {useAppSelector} from '../../../../../app/hooks/hooks.ts';
import {getBasketCameraList} from '../../../../../store/slice/basket-slice/service/basket-selectors.ts';


const BasketIcon = () => {
  const basketStorageData = useAppSelector(getBasketCameraList);
  const basketCountClassname = basketStorageData.length === 0 ? 'hidden' : 'header__basket-count';


  return (
    <Link className="header__basket-link"
          to={RoutePath.Basket}
    >
      <svg width="16"
           height="16"
           aria-hidden="true"
      >
        <use xlinkHref="#icon-basket"></use>
      </svg>
      <span className={basketCountClassname}>{basketStorageData.length}</span>
    </Link>
  )
};

export default BasketIcon;

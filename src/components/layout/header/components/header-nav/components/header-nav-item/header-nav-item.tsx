
import {NavItemProps} from '../../types/types.ts';
import {Link} from 'react-router-dom';

const HeaderNavItem = ({title}: NavItemProps) => (
  <li className="main-nav__item" data-testid="main-nav__item">
    <Link className="main-nav__link"
      to="/"
    >{title}
    </Link>
  </li>
);

export default HeaderNavItem;

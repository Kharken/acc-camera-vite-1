
import {NavItem} from '../types/types.ts';

const MainNavItem = ({title}: NavItem) => (
  <li className="main-nav__item">
    <a className="main-nav__link"
      href="/"
    >{title}
    </a>
  </li>
);

export default MainNavItem;

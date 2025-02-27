
import {NavItemProps} from '../../types/types.ts';

const HeaderNavItem = ({title}: NavItemProps) => (
  <li className="main-nav__item">
    <a className="main-nav__link"
      href="/public"
    >{title}
    </a>
  </li>
);

export default HeaderNavItem;

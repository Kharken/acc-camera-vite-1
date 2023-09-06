import FooterNavMenuItem from '../footer-nav-menu-item';
import {FooterNavItemProps} from '../../types/types.ts';

const FooterNavItem = ({title, menuList}: FooterNavItemProps) => (
  <li className="footer__nav-item" data-testid="footer-nav-item">
    <p className="footer__title">{title}</p>
    <ul className="footer__list">
      {menuList.map((item) => (<FooterNavMenuItem footerMenuListItem={item} key={item} />))}
    </ul>
  </li>
);

export default FooterNavItem;

import {FooterNavMenuItemProps} from '../../types/types.ts';
import {Link} from 'react-router-dom';

const FooterNavMenuItem = ({footerMenuListItem}: FooterNavMenuItemProps) => (
  <li className="footer__item" data-testid="footer-nav-menu-item">
    <Link className="link"
      to="/"
    >{footerMenuListItem}
    </Link>
  </li>
);

export default FooterNavMenuItem;

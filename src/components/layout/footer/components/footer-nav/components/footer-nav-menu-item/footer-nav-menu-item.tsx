import {FooterNavMenuItemProps} from '../../types/types.ts';

const FooterNavMenuItem = ({footerMenuListItem}: FooterNavMenuItemProps) => (
  <li className="footer__item">
    <a className="link"
      href="#"
    >{footerMenuListItem}
    </a>
  </li>
);

export default FooterNavMenuItem;

import {FooterNavItemList} from './const/const.ts';
import FooterNavItem from './components/footer-nav-item';

const FooterNav = () => (
  <ul className="footer__nav">
    {FooterNavItemList.map((item) => <FooterNavItem title={item.title} key={item.title} menuList={item.menuList} />)}
  </ul>
);

export default FooterNav;

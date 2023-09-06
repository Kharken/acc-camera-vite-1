import {getEnumTextKeys} from '../../../../../utils/get-enum-text-keys.ts';
import MainNavItemTitle from './const';
import MainNavItem from './components/header-nav-item';

const HeaderNav = () => (
  <nav className="main-nav header__main-nav" data-testid="main-nav">
    <ul className="main-nav__list">
      {getEnumTextKeys(MainNavItemTitle)
        .map((item) => (
          <MainNavItem title={item}
            key={item}
          />))}
    </ul>
  </nav>
);

export default HeaderNav;

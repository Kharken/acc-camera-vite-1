import {getEnumTextKeys} from '../../../utils/get-enum-text-keys.ts';
import MainNavItemTitle from '../header/components/const';
import MainNavItem from '../header/components/main-nav-item';

const HeaderNav = () => (
  <>
    {getEnumTextKeys(MainNavItemTitle)
      .map((item) => (
        <MainNavItem title={item}
          key={item}
        />))}
  </>
);

export default HeaderNav;

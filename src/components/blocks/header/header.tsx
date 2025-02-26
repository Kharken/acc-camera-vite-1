
import Logo from '../../ui/logo';
import HeaderNav from './components/header-nav';

const Header = () => (
  <header className="header" id="header">
    <div className="container">
      <Logo classNameProp={'header'} xlinkHrefProp={''}/>
      <HeaderNav/>
    </div>
  </header>
);

export default Header;

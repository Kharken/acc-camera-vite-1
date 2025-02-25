
import Logo from '../../ui/logo';
import HeaderNav from '../header-nav';

const Header = () => (
  <header className="header" id="header">
    <div className="container">
      <Logo/>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <HeaderNav/>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

import Logo from '../../ui/logo';
import FooterNav from './components/footer-nav';
import FooterSocial from './components/footer-social';
import {footerDescription} from './const/const.ts';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__info">
        <Logo xlinkHrefProp={'-mono'} classNameProp={'footer'}/>
        <p className="footer__description">{footerDescription}</p>
        <FooterSocial/>
      </div>
      <FooterNav/>
    </div>
  </footer>
);

export default Footer;

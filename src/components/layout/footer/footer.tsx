import Logo from '../../ui/logo';
import FooterNav from './components/footer-nav';
import FooterSocial from './components/footer-social';
import {footerDescription} from './const/const.ts';
import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getCurrentCameraLoadingStatus} from '../../../store/slice/camera-slice/service/camera-selectors.ts';

const Footer = () => {
  const isLoading = useAppSelector(getCurrentCameraLoadingStatus);

  return(
    <footer className={isLoading ? 'visually-hidden' : 'footer'} id="footer" data-testid="footer">
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
};

export default Footer;

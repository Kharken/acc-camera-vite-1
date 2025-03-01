
import Logo from '../../ui/logo';
import HeaderNav from './components/header-nav';
import {useAppSelector} from '../../../app/hooks/hooks.ts';
import {getCurrentCameraLoadingStatus} from '../../../store/slice/camera-slice/service/camera-selectors.ts';

const Header = () => {
  const isLoading = useAppSelector(getCurrentCameraLoadingStatus);

  return(
    <header className={isLoading ? 'visually-hidden' : 'header'} id="header">
      <div className="container">
        <Logo classNameProp={'header'} xlinkHrefProp={''}/>
        <HeaderNav/>
      </div>
    </header>
  );
};

export default Header;

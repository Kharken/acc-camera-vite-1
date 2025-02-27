import {LogoProps} from './types/types.ts';
import {Link} from 'react-router-dom';

const Logo = ({xlinkHrefProp, classNameProp}: LogoProps) => (
  <Link className={`${classNameProp}__logo`}
    to="/"
    aria-label="Переход на главную"
  >
    <svg width="100"
      height="36"
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-logo${xlinkHrefProp}`}></use>
    </svg>
  </Link>
);

export default Logo;

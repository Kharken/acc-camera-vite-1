import {LogoProps} from './types/types.ts';

const Logo = ({xlinkHrefProp, classNameProp}: LogoProps) => (
  <a className={`${classNameProp}__logo`}
    href="index.html"
    aria-label="Переход на главную"
  >
    <svg width="100"
      height="36"
      aria-hidden="true"
    >
      <use xlinkHref={`#icon-logo${xlinkHrefProp}`}></use>
    </svg>
  </a>
);

export default Logo;

import {FooterSocialItemProps} from '../../types/types.ts';

const FooterSocialItem = ({footerSocialItemValues}: FooterSocialItemProps) => (
  <li className="social__item">
    <a className="link"
      href="#"
      aria-label={`Переход на страницу ${footerSocialItemValues[1]}`}
    >
      <svg width="20"
        height="20"
        aria-hidden="true"
      >
        <use xlinkHref={`#icon-${footerSocialItemValues[0]}`}></use>
      </svg>
    </a>
  </li>
);

export default FooterSocialItem;

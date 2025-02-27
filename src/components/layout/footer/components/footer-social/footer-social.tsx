import {SocialItemsValues} from './const/const.ts';
import FooterSocialItem from './components/footer-social-item';


const FooterSocial = () => (
  <ul className="social">
    {Object.entries(SocialItemsValues).map((item) => (<FooterSocialItem footerSocialItemValues={item} key={item[0]}/>))}
  </ul>
);

export default FooterSocial;

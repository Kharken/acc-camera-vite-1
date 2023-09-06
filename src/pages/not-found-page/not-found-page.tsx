import {Link} from 'react-router-dom';
import Logo from '../../components/ui/logo';
import styles from './not-found-page.module.css';

const NotFoundPage = () => (
  <>
    <div className={styles.logo}>
      <Logo xlinkHrefProp={''} classNameProp={''}/>
    </div>
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page not found</p>
      <Link className={styles.link}
        to="/"
      >Go to Main Page
      </Link>
    </div>
  </>
);

export default NotFoundPage;

import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Математичний тренажер 🧠</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/profile/123" className={styles.navLink}>
          Профіль
        </Link>
      </nav>
    </header>
  );
};

export default Header;
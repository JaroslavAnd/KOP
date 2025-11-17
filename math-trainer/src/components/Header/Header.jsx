import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { useGameStore } from '../../store/useGameStore';

const Header = () => {
  const currentUser = useGameStore((state) => state.currentUser);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <h1>Математичний тренажер 🧠</h1>
      </Link>
      <nav className={styles.nav}>
        <Link to="/results" className={styles.navLink}>
          Результати
        </Link>
        <Link to={`/profile/${currentUser}`} className={styles.navLink}>
          Мій Профіль
        </Link>
      </nav>
    </header>
  );
};

export default Header;
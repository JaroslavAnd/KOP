import { useParams, Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <div className={styles.profile}>
      <h2>Сторінка Профілю</h2>
      <p>ID користувача з URL: <strong>{userId}</strong></p>
      <p>Це приклад динамічного роутингу. В реальному застосунку тут могли б бути ваші рекорди.</p>
      <Link to="/">Повернутись на головну</Link>
    </div>
  );
};

export default ProfilePage;
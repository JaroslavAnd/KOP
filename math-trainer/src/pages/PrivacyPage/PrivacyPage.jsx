import { Link } from 'react-router-dom';
import styles from './PrivacyPage.module.css';

const PrivacyPage = () => {
  return (
    <div className={styles.privacyPage}>
      <h1>Політика конфіденційності</h1>
      <p className={styles.date}><strong>Останнє оновлення:</strong> 10.02.2026</p>

      <section>
        <h2>1. Які дані ми збираємо</h2>
        <p>Ми не збираємо особисті дані на наші сервери. Вся інформація зберігається <strong>локально на вашому пристрої</strong>.</p>
        <p>Дані включають:</p>
        <ul>
          <li>Ім'я користувача (нікнейм).</li>
          <li>Історію ігор та результати.</li>
          <li>Налаштування гри (рівень складності, час).</li>
        </ul>
      </section>

      <section>
        <h2>2. Використання LocalStorage</h2>
        <p>Для забезпечення роботи гри ми використовуємо технологію <code>localStorage</code> вашого браузера. Це дозволяє зберігати прогрес між перезавантаженнями сторінки.</p>
      </section>

      <section>
        <h2>3. Cookie та Спливаюче вікно</h2>
        <p>Ми використовуємо лише технічні файли cookie для збереження вашої згоди з цією політикою (Cookie Consent).</p>
      </section>

      <section>
        <h2>4. Ваші права (GDPR)</h2>
        <p>Ви маєте повний контроль над своїми даними. Ви можете видалити всю історію та налаштування в будь-який момент, натиснувши кнопку "Очистити результати" на сторінці статистики.</p>
      </section>

      <div className={styles.actions}>
        <Link to="/" className={styles.backLink}>← Повернутися на головну</Link>
      </div>
    </div>
  );
};

export default PrivacyPage;
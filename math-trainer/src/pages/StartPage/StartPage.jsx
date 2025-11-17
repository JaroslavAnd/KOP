import Button from '../../components/Button/Button';
import styles from './StartPage.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useGameStore } from '../../store/useGameStore';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  difficulty: yup.string().required(),
  gameTime: yup.number()
    .min(10, 'Мінімум 10 секунд')
    .max(60, 'Максимум 60 секунд')
    .required("Це поле обов'язкове"),
  userName: yup.string().required("Введіть ім'я").min(2, 'Мінімум 2 літери'),
});

const StartPage = () => {
  const settings = useGameStore((state) => state.settings);
  const currentUser = useGameStore((state) => state.currentUser);
  const setSettings = useGameStore((state) => state.setSettings);
  const setCurrentUser = useGameStore((state) => state.setCurrentUser);
  
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...settings,
      userName: currentUser,
    },
  });

  const onSubmit = (data) => {
    setSettings({ difficulty: data.difficulty, gameTime: data.gameTime });
    setCurrentUser(data.userName);
    navigate('/game');
  };

  return (
    <div className={styles.startPage}>
      <h2>Налаштування Гри</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Ваше Ім'я</label>
          <input 
            type="text" 
            {...register('userName')} 
            placeholder="Guest" 
          />
          {errors.userName && <p className={styles.error}>{errors.userName.message}</p>}
        </div>

        <div className={styles.formGroup}>
          <label>Рівень складності</label>
          <select {...register('difficulty')}>
            <option value="easy">Легкий</option>
            <option value="medium">Середній</option>
            <option value="hard">Складний</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label>Тривалість (сек)</label>
          <input type="number" {...register('gameTime')} />
          {errors.gameTime && <p className={styles.error}>{errors.gameTime.message}</p>}
        </div>

        <Button type="submit">
          Почати гру
        </Button>
      </form>
    </div>
  );
};

export default StartPage;
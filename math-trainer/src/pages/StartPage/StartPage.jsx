import Button from '../../components/Button/Button';
import styles from './StartPage.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSettings } from '../../context/SettingsContext';

const schema = yup.object().shape({
  difficulty: yup.string().required(),
  gameTime: yup.number()
    .min(10, 'Мінімум 10 секунд')
    .max(60, 'Максимум 60 секунд')
    .required(),
});

const StartPage = ({ onStart }) => {
  const { settings, setSettings } = useSettings();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: settings, 
  });

  const onSubmit = (data) => {
    setSettings(data); 
    onStart();         
  };

  return (
    <div className={styles.startPage}>
      <h2>Налаштування Гри</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
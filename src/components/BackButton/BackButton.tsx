import { useRouter } from 'next/router';
import { HiChevronLeft } from 'react-icons/hi';
import styles from './BackButton.module.scss';
import i18next from 'i18next';

const BackButton = (): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={styles.back} onClick={handleClick}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{i18next.language == 'en' ? 'Back' : 'Назад'}</span>
    </button>
  );
};

export default BackButton;

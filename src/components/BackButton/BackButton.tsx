import { useRouter } from 'next/router';
import { HiChevronLeft } from 'react-icons/hi';
import styles from './BackButton.module.scss';

const BackButton = (): JSX.Element => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <button className={styles.back} onClick={handleClick}>
      <HiChevronLeft className={styles.back__icon} />
      <span>Назад</span>
    </button>
  );
};

export default BackButton;

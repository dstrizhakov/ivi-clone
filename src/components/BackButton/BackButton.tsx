import { useRouter } from 'next/router';
import { HiChevronLeft } from 'react-icons/hi';
import styles from './BackButton.module.scss';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';

const BackButton = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  useEscapeKey(handleClick);

  return (
    <button className={styles.back} onClick={handleClick}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{t('buttons.back')}</span>
    </button>
  );
};

export default BackButton;

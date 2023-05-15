import { useRouter } from 'next/navigation';
import { HiChevronLeft } from 'react-icons/hi';
import styles from './BackButton.module.scss';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { FC } from 'react';

const BackButton: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const router = useRouter();

  const back = () => {
    router.back();
  };

  useEscapeKey(back);

  return (
    <button className={styles.back} onClick={back}>
      <HiChevronLeft className={styles.back__icon} />
      <span>{t('buttons.back')}</span>
    </button>
  );
};

export default BackButton;

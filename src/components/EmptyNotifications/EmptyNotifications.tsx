import { P } from '../P/P';
import styles from './EmptyNotifications.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import BackButton from '@/components/BackButton/BackButton';
import { Htag } from '@/components/Htag/Htag';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const EmptyNotifications: FC = (): JSX.Element => {
  const { t } = useTranslation();
  return (
    <>
      <BackButton />
      <Htag tag="h2">{t('buttons.notifications-stocks')}</Htag>
      <div className={styles.row}>
        <HiOutlineBellAlert className={styles.icon} />
        <P size="L" color="gray-light">
          {t('categories.notifications-text')}
        </P>
      </div>
    </>
  );
};

export default EmptyNotifications;

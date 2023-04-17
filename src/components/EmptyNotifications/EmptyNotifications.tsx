import { P } from '../P/P';
import styles from './EmptyNotifications.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';

const EmptyNotifications = (): JSX.Element => {
  return (
    <div className={styles.row}>
      <HiOutlineBellAlert className={styles.icon} />
      <P size="L" color="gray-light">
        Здесь появляются только важные сообщения
      </P>
    </div>
  );
};

export default EmptyNotifications;

import styles from './Player.module.scss';
import dynamic from 'next/dynamic';
import { FC, useState } from 'react';
import { PlayerProps } from './Player.props';
import { Button } from '../Button/Button';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });
// const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { HiOutlineBookmark } from 'react-icons/hi2';
import { IoPlayOutline } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const Player: FC<PlayerProps> = ({ url }) => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <div className={styles.player__container}>
          {!error && (
            <ReactPlayer
              onReady={() => setError(false)}
              onError={() => setError(true)}
              width="100%"
              height="100%"
              className={styles.video}
              controls={true}
              light={true}
              url={url}
            />
          )}
        </div>

        <div className={styles.actions}>
          <Button appearance="rectangle">
            <IoPlayOutline className={styles.icon} />
            {t('buttons.trailer')}
          </Button>
          <Button appearance="square">
            <HiOutlineBookmark className={styles.icon} />
          </Button>
          <Button appearance="square">
            <FiUpload className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;

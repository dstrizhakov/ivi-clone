import styles from './Player.module.scss';
import dynamic from 'next/dynamic';
import { FC, useEffect, useState } from 'react';
import { PlayerProps } from './Player.props';
import { Button } from '../Button/Button';
import { IoPlayOutline } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import AddToFavoritesButton from '@/components/Card/CardButtons/AddToFavoritesButton';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: true });

const Player: FC<PlayerProps> = ({ url }) => {
  const { t } = useTranslation();

  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <div className={styles.player__container}>
          {hasWindow && (
            <ReactPlayer
              width="100%"
              height="100%"
              className={styles.video}
              controls={true}
              light={true}
              url={url}
              playing={true}
            />
          )}
        </div>

        <div className={styles.actions}>
          <Button appearance="rectangle">
            <IoPlayOutline className={styles.icon} />
            {t('buttons.trailer')}
          </Button>
          <AddToFavoritesButton />

          <Button appearance="square">
            <FiUpload className={styles.icon} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;

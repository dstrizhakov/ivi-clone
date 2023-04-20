import styles from './Player.module.scss';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { PlayerProps } from './Player.props';
import { Button } from '../Button/Button';
// const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
import { HiOutlineBookmark } from 'react-icons/hi2';
import { IoPlayOutline } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';

const Player: FC<PlayerProps> = ({ url }) => {
  return (
    <div className={styles.container}>
      <div className={styles.player}>
        <ReactPlayer width="100%" className={styles.video} controls={true} light={true} url={url} />
        <div className={styles.actions}>
          <Button appearance="rectangle">
            <IoPlayOutline className={styles.icon} />
            Трейлер
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

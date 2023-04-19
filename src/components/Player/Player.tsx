import styles from './Player.module.scss';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import { PlayerProps } from './Player.props';
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Player: FC<PlayerProps> = ({ url }) => {
  return (
    <div className={styles.container}>
      <ReactPlayer width="100%" className={styles.player} controls={true} light={true} url={url} />
    </div>
  );
};

export default Player;

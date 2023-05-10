import React, { FC } from 'react';
import styles from './FeatureTag.module.scss';
import Link from 'next/link';

const FeatureTag: FC = ({ name, link }): JSX.Element => {
  return (
    <Link href={link} className={styles.ft_cont}>
      <button className={styles.ft}>
        <span>{name}</span>
      </button>
    </Link>
  );
};

export default FeatureTag;

import React, { FC, ReactNode, useState } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';

interface iDesc {
  title: ReactNode;
  children: ReactNode;
  cut: ReactNode;
}

const Description: FC<iDesc> = ({ title, cut, children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className={styles.description}>
      {title}
      <div className={`${open ? '' : styles.first}`}>
        {cut}
        <span style={{ display: open ? 'inherit' : 'none' }}>{children}</span>
      </div>
      <Button size={'S'} appearance={'transparent'} onClick={() => setOpen(() => !open)}>
        {open ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

export default Description;

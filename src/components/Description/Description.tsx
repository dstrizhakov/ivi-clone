import React, { FC, useState } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './Description.module.scss';
import { useTranslation } from 'react-i18next';
import { iDesc } from '@/components/Description/Description.props';
import { BtnA, BtnS } from '@/components/Button/Button.props';

const Description: FC<iDesc> = ({ title, cut, children }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const { t } = useTranslation();
  return (
    <div className={styles.description}>
      {title}
      <div className={`${open ? '' : styles.first}`}>
        {cut}
        <span style={{ display: open ? 'inherit' : 'none' }}>{children}</span>
      </div>
      <Button size={BtnS.S} appearance={BtnA.transparent} onClick={() => setOpen(() => !open)}>
        {open ? t('descriptions.close-btn') : t('descriptions.open-btn')}
      </Button>
    </div>
  );
};

export default Description;

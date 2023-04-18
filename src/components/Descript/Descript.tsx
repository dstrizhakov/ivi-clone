import React, { FC, ReactNode, useState } from "react";
import { Htag } from '@/components/Htag/Htag';
import { Button } from '@/components/Button/Button';
import styles from './Descript.module.scss';
import { DescriptProps } from "@/components/Descript/Descript.props";

const Descript: FC<DescriptProps> = ({heading, children, appearance}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={styles.description}>
      {heading && <Htag tag={'h4'}>{heading}</Htag>}
      <div className={`${open || styles.first}`}>
        {children}
      </div>
      <Button appearance={appearance||'rectangle'} onClick={() => setOpen(() => !open)}>{open ? `Свернуть` : `Развернуть`}</Button>
    </div>
  );
};

export default Descript;

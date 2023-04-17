import { P } from '../P/P';
import styles from './EmptyNotifications.module.scss';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import BackButton from "@/components/BackButton/BackButton";
import { Htag } from "@/components/Htag/Htag";
import React from "react";

const EmptyNotifications = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <BackButton />
      <Htag tag="h2">Уведомления и акции</Htag>
      <div className={styles.row}>
        <HiOutlineBellAlert className={styles.icon} />
        <P size="L" color="gray-light">
          Здесь появляются только важные сообщения
        </P>
      </div>
    </div>

  );
};

export default EmptyNotifications;

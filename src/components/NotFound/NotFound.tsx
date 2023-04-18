import React from "react";
import styles from './NotFound.module.scss'
import { Htag } from "@/components/Htag/Htag";
import { P } from "@/components/P/P";

const NotFound = (): JSX.Element => {
  return (
    <div className={styles.content}>
      <div className={styles.content__row}>
        <Htag tag={'h2'}>Ошибка</Htag>
        <P>Запрашиваемой страницы не существует</P>
      </div>
    </div>
  );
};

export default NotFound;

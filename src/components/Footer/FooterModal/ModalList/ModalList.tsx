import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ModalList.module.scss';
import { ModalListProps } from './ModalList.props';
import { P } from '@/components/P/P';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

const ModalList: FC<ModalListProps> = ({ children, title, icon, isFilms }) => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const IconComponent = icon ? icon : undefined;

  const variants = {
    visible: {
      paddingTop: 20,
      transition: { duration: 0.2 },
      opacity: 1,
      height: 'auto',
    },
    hidden: {
      transition: { duration: 0 },
      paddingTop: 0,
      opacity: 0,
      height: 0,
    },
  };

  return (
    <div>
      <P
        onClick={() => (isListOpen ? setIsListOpen(false) : setIsListOpen(true))}
        size="M"
        className={styles.title}
      >
        {icon && IconComponent && <IconComponent />}
        {title} {isListOpen ? <BsChevronCompactUp /> : <BsChevronCompactDown />}
      </P>
      <motion.div
        className={styles.wrap}
        initial={isListOpen ? 'visible' : 'hidden'}
        animate={isListOpen ? 'visible' : 'hidden'}
        variants={variants}
      >
        {isFilms ? (
          <>
            <Link href={'#'} className={styles.list__link}>
              Все {title}
            </Link>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <P className={styles.list__title}>Жанры</P>
                <ul className={styles.list__link}>links</ul>
              </li>
              <li className={styles.list__item}>
                <ul>
                  <li>
                    <P className={styles.list__title}>Страны</P>
                    <ul className={styles.list__link}>links</ul>
                  </li>
                  <li className={styles.list__item}>
                    <P className={styles.list__title}>Годы</P>
                    <ul className={styles.list__link}>links</ul>
                  </li>
                </ul>
              </li>
              <li className={styles.list__item}>
                <ul className={styles.list__link}>links</ul>
              </li>
            </ul>
          </>
        ) : (
          <></>
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default ModalList;

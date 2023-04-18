import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ModalList.module.scss';
import { ModalListProps } from './ModalList.props';
import { P } from '@/components/P/P';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { ILink } from '@/types/types';
import { movieCategories } from '@/mock/movieCategories';

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
                {movieCategories?.genres &&
                  movieCategories?.genres.map((item: ILink) => (
                    <Link className={styles.list__link} key={item.title} href={item.link}>
                      {item.title}
                    </Link>
                  ))}
              </li>
              <li className={styles.flex}>
                <ul>
                  <li className={styles.list__item}>
                    <P className={styles.list__title}>Страны</P>
                    {movieCategories?.countries &&
                      movieCategories?.countries.map((item: ILink) => (
                        <Link className={styles.list__link} key={item.title} href={item.link}>
                          {item.title}
                        </Link>
                      ))}
                  </li>
                  <li className={styles.list__item}>
                    <P className={styles.list__title}>Годы</P>
                    {movieCategories?.years &&
                      movieCategories?.years.map((item: ILink) => (
                        <Link className={styles.list__link} key={item.title} href={item.link}>
                          {item.title}
                        </Link>
                      ))}
                  </li>
                </ul>
                <div className={styles.list__item}>
                  {movieCategories?.collections &&
                    movieCategories?.collections.map((item: ILink) => (
                      <Link className={styles.list__link} key={item.title} href={item.link}>
                        {item.title}
                      </Link>
                    ))}
                </div>
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

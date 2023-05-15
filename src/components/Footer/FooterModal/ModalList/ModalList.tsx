import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ModalList.module.scss';
import { ModalListProps } from './ModalList.props';
import { P } from '@/components/P/P';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';
import { ILink } from '@/types/types';
import { movieCategories } from '@/mock/movieCategories';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

const ModalList: FC<ModalListProps> = ({ children, title, icon, isFilms }): JSX.Element => {
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const IconComponent = icon ? icon : undefined;
  const { t } = useTranslation();
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
        {isFilms && (
          <>
            <Link href={'#'} className={styles.list__link}>
              {i18next.language == 'en' ? `All ${title}` : `Все ${title}`}
            </Link>
            <ul className={styles.list}>
              <li className={styles.list__item}>
                <P className={styles.list__title}>{t('categories.genres')}</P>
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
                    <P className={styles.list__title}>{t('categories.countries')}</P>
                    {movieCategories?.countries &&
                      movieCategories?.countries.map((item: ILink) => (
                        <Link className={styles.list__link} key={item.title} href={item.link}>
                          {item.title}
                        </Link>
                      ))}
                  </li>
                  <li className={styles.list__item}>
                    <P className={styles.list__title}>{t('categories.years')}</P>
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
        )}
        {children}
      </motion.div>
    </div>
  );
};

export default ModalList;

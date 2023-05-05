import { FC, useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';

import { PersonsModalProps } from './PersonsModal.props';
import styles from './PersonsModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@/components/Button/Button';
import { HiChevronLeft } from 'react-icons/hi';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import BarGraph from '@/components/BarGraph/BarGraph';
import { nameToLink } from '@/helpers/nameToLink';

export const PersonsModal: FC<PersonsModalProps> = ({ item, isOpen, closeModal }) => {
  usePreventScroll(isOpen);
  const { name, persons } = item;

  return (
    <div className={cn(styles.modal, isOpen ? styles.modal__open : '')}>
      <Button appearance="transparent" className={styles.back} onClick={() => closeModal()}>
        <HiChevronLeft className={styles.back__icon} />
        <span>К фильму</span>
      </Button>

      <div className={styles.wrap}>
        <Tabs className={styles.tabs}>
          <Htag tag={'h2'}>{name}</Htag>
          <TabList className={styles.tabs__title}>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              Создатели
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              Отзывы
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              Трейлеры
            </Tab>
            <Tab className={styles.tab} selectedClassName={styles.active}>
              Награды
            </Tab>
          </TabList>

          <TabPanel className={styles.tabs__content}>
            <Htag tag="h3">Актёры</Htag>
            <div className={styles.cards}>
              {persons.map((p) => {
                return (
                  <Link
                    href={`/person/${nameToLink(p.enName)}`}
                    key={p.enName}
                    className={styles.link}
                  >
                    <div className={styles.card}>
                      <img src={p.url} alt="" />
                    </div>
                    <div>
                      {p.name.split(' ').map((n) => (
                        <p key={p.enName} className={styles.name}>
                          {n}
                        </p>
                      ))}
                      <P size="S">3 фильма</P>
                    </div>
                  </Link>
                );
              })}
            </div>
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <h2> Отзывы</h2>
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <h2>Трейлеры</h2>
          </TabPanel>
          <TabPanel className={styles.tabs__content}>
            <h2>Награды</h2>
          </TabPanel>
        </Tabs>
        <div className={styles.movie}>
          <img
            onClick={() => closeModal()}
            className={styles.movie__img}
            src="https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/128x196/?q=85"
            alt=""
          />

          <div className={styles.movie__info}>
            <div className={styles.graphs}>
              <span>9,1</span>
              <div className={styles.graphs__wrap}>
                <BarGraph width={80} />
                <BarGraph width={73} />
                <BarGraph width={62} />
                <BarGraph width={98} />
              </div>
            </div>
            <P size="S" className={styles.movie__descr}>
              2011, США, Фэнтези
            </P>
            <P size="S">130 минут</P>
          </div>
        </div>
      </div>
    </div>
  );
};

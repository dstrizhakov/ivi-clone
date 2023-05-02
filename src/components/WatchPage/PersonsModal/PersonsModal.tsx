import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './PersonsModal.module.scss';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@/components/Button/Button';
import { HiChevronLeft } from 'react-icons/hi';
import { usePreventScroll } from '@/hooks/usePreventScroll';
import BarGraph from '@/components/BarGraph/BarGraph';
import { selectModal, setShowPersonsModal } from '@/store/reducers/modals.slice';
import { useTranslation } from 'react-i18next';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import i18next from 'i18next';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { nameToLink } from '@/helpers/nameToLink';

export const PersonsModal: FC = () => {
  const dispatch = useAppDispatch();
  const { personModalItem, showPersonsModal } = useAppSelector(selectModal);
  const { name, enName, persons, card_image } = personModalItem;
  const { t } = useTranslation();
  usePreventScroll(showPersonsModal);
  const close = () => {
    dispatch(setShowPersonsModal(false));
  };
  useEscapeKey(close);
  return (
    <>
      {showPersonsModal && (
        <div className={cn(styles.modal, showPersonsModal ? styles.modal__open : '')}>
          <Button appearance="transparent" className={styles.back} onClick={() => close()}>
            <HiChevronLeft className={styles.back__icon} />
            <span>{t('buttons.to-movie')}</span>
          </Button>

          <div className={styles.wrap}>
            <Tabs className={styles.tabs}>
              <Htag tag={'h2'}>{i18next.language == 'en' ? enName : name}</Htag>
              <TabList className={styles.tabs__title}>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.creators')}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.reviews')}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.trailers')}
                </Tab>
                <Tab className={styles.tab} selectedClassName={styles.active}>
                  {t('categories.awards')}
                </Tab>
              </TabList>

              <TabPanel className={styles.tabs__content}>
                <Htag tag="h3">{t('categories.actors')}</Htag>
                <div className={styles.cards} onClick={() => close()}>
                  {persons.map((p) => {
                    return (
                      <Link
                        href={`/person/${nameToLink(p.enName)}`}
                        key={Math.random() * p.id}
                        className={styles.link}
                      >
                        <div className={styles.card}>
                          <img src={p.url} alt="" />
                        </div>
                        <div>
                          {(i18next.language == 'en' ? p.enName : p.name).split(' ').map((n) => (
                            <p key={Math.random() * p.id} className={styles.name}>
                              {n}
                            </p>
                          ))}
                          <P size="S">3 {i18next.language == 'en' ? 'movies' : 'фильма'}</P>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.reviews')}</h2>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.trailers')}</h2>
              </TabPanel>
              <TabPanel className={styles.tabs__content}>
                <h2>{t('categories.awards')}</h2>
              </TabPanel>
            </Tabs>
            <div className={styles.movie}>
              <img
                onClick={() => close()}
                className={styles.movie__img}
                src={card_image} //"https://thumbs.dfs.ivi.ru/storage2/contents/5/b/1a320c6f0240982ad3f287e19afa91.jpg/128x196/?q=85"
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
      )}
    </>
  );
};

import React, { FC } from 'react';
import styles from './User.module.scss';
import { Button } from '../../Button/Button';
import LinkCard from '@/components/Header/LinkCard/LinkCard';
import { BiCertification, BiMoviePlay } from 'react-icons/bi';
import { HiOutlineBookmark } from 'react-icons/hi2';
import { IoDiamondOutline, IoTimerOutline } from 'react-icons/io5';
import { TbDeviceTvOld } from 'react-icons/tb';
import { GoCreditCard } from 'react-icons/go';
import Link from 'next/link';
import { useAppDispatch } from '@/hooks/redux';
import { useTranslation } from 'react-i18next';
import { setShowAuth } from '@/store/reducers/modals.slice';

const User: FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const login = () => {
    dispatch(setShowAuth(true));
  };

  return (
    <div className={styles.user__content}>
      <div className={styles.content__row}>
        <div className={styles.content__actions}>
          <LinkCard icon={BiMoviePlay} title={t('buttons.purchases')} link="/purchases" />
          <LinkCard icon={HiOutlineBookmark} title={t('buttons.watch-later')} link="/purchases" />
          <LinkCard icon={IoTimerOutline} title={t('buttons.views-story')} link="/purchases" />
          <LinkCard
            icon={IoDiamondOutline}
            title={t('buttons.subscriptions')}
            link="/purchases"
            subtitle={t('buttons.connect')}
            status="red"
          />
          <LinkCard
            icon={BiCertification}
            title={t('buttons.activate-certificate')}
            link="/purchases"
          />
          <LinkCard icon={TbDeviceTvOld} title={t('buttons.code-login')} link="/purchases" />
          <LinkCard icon={GoCreditCard} title={t('buttons.payment')} link="/purchases" />
        </div>
        <div className={styles.content__auth}>
          {/*<Link href={'/profile'}>*/}
          <Button size="L" appearance="red" onClick={() => login()}>
            <span className={styles.content__nowrap}>{t('buttons.login-signup')}</span>
          </Button>
          {/*</Link>*/}
          <div className={styles.content__links}>
            <Link href={'https://www.ivi.tv/profile/settings'}>{t('buttons.settings')}</Link>
            <Link href={'https://ask.ivi.ru/'}>{t('buttons.support')}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;

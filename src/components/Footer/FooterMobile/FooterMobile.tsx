import { FC } from 'react';
import styles from './FooterMobile.module.scss';
import FooterLink from '../FooterLink/FooterLink';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineFolder } from 'react-icons/hi2';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoCloseOutline, IoTvOutline } from 'react-icons/io5';
import { RiHome6Line } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal, setShowFooterModal, setShowSearch } from '@/store/reducers/modals.slice';

const FooterMobile: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { showSearch, showFooterModal } = useSelector(selectModal);
  const dispatch = useDispatch();
  const openFooter = () => {
    if (showFooterModal) {
      dispatch(setShowFooterModal(false));
    } else {
      dispatch(setShowFooterModal(true));
    }
  };
  const openSearch = () => {
    dispatch(setShowFooterModal(false));
    if (showSearch) {
      dispatch(setShowSearch(false));
    } else {
      dispatch(setShowSearch(true));
    }
  };
  return (
    <div className={styles.footerMobile}>
      <div className={styles.menu}>
        <Link href={'/'} className={styles.link}>
          <FooterLink title={t('sections.my-ivi')} href={'/'} icon={RiHome6Line} />
        </Link>
        <Link href={'/movies'} className={styles.link}>
          <FooterLink title={t('sections.catalog')} href={'/movies'} icon={HiOutlineFolder} />
        </Link>
        <FooterLink
          title={t('sections.search')}
          href={showSearch ? '' : '?search'}
          icon={BiSearch}
          openModal={() => openSearch()}
        />
        <Link href={'https://www.ivi.ru/tvplus'} className={styles.link}>
          <FooterLink title={'TV+'} href={'https://www.ivi.ru/tvplus'} icon={IoTvOutline} />
        </Link>
        <FooterLink
          title={showFooterModal ? t('footer.close-btn') : t('footer.open-btn')}
          href={showFooterModal ? '' : '?navigation'}
          openModal={() => openFooter()}
          icon={showFooterModal ? IoCloseOutline : HiDotsHorizontal}
        />
      </div>
    </div>
  );
};

export default FooterMobile;

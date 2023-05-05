import { FC, useState } from 'react';
import styles from './FooterMobile.module.scss';
import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import FooterModal from '../FooterModal/FooterModal';
import FooterLink from '../FooterLink/FooterLink';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineFolder } from 'react-icons/hi2';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoCloseOutline, IoTvOutline } from 'react-icons/io5';
import { RiHome6Line } from 'react-icons/ri';
import Link from 'next/link';

const FooterMobile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  return (
    <>
      <FooterModal isOpen={isModalOpen} />
      <SearchModal isOpen={isSearchOpen} closeSearch={() => setIsSearchOpen(false)} />
      <div className={styles.footerMobile}>
        <div className={styles.menu}>
          <Link href={'/'} className={styles.link}>
            <FooterLink title={'Мой Иви'} href={'/'} icon={RiHome6Line} />
          </Link>
          <Link href={'/movies'} className={styles.link}>
            <FooterLink title={'Каталог'} href={'/movies'} icon={HiOutlineFolder} />
          </Link>
          <FooterLink
            title={'Поиск'}
            isOpen={isSearchOpen}
            icon={BiSearch}
            openModal={
              isSearchOpen
                ? () => setIsSearchOpen(false)
                : () => {
                    setIsSearchOpen(true);
                    setIsModalOpen(false);
                  }
            }
          />
          <Link href={'https://www.ivi.ru/tvplus'} className={styles.link}>
            <FooterLink href={'https://www.ivi.ru/tvplus'} title={'TV+'} icon={IoTvOutline} />
          </Link>
          <FooterLink
            title={isModalOpen ? 'Закрыть' : 'Ещё'}
            isOpen={isModalOpen}
            openModal={
              isModalOpen
                ? () => setIsModalOpen(false)
                : () => {
                    setIsModalOpen(true);
                    setIsSearchOpen(false);
                  }
            }
            icon={isModalOpen ? IoCloseOutline : HiDotsHorizontal}
          />
        </div>
      </div>
    </>
  );
};

export default FooterMobile;

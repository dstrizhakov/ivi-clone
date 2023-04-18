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

const FooterMobile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  return (
    <>
      <FooterModal isOpen={isModalOpen} />
      <SearchModal isOpen={isSearchOpen} closeSearch={() => setIsSearchOpen(false)} />
      <div className={styles.footerMobile}>
        <div className={styles.menu}>
          <FooterLink title={'Мой Иви'} href={'/'} icon={RiHome6Line} />
          <FooterLink title={'Каталог'} href={'/movies'} icon={HiOutlineFolder} />
          <FooterLink
            title={'Поиск'}
            href={isSearchOpen ? '/' : '/?search'}
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
          <FooterLink title={'TV+'} href={'https://www.ivi.ru/tvplus'} icon={IoTvOutline} />
          <FooterLink
            title={isModalOpen ? 'Закрыть' : 'Ещё'}
            href={isModalOpen ? '/' : '/?navigation'}
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

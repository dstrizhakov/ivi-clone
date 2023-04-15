import { FC, useState } from 'react';
import styles from './FooterMobile.module.scss';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineFolder } from 'react-icons/hi2';
import { HiDotsHorizontal } from 'react-icons/hi';
import { IoCloseOutline, IoTvOutline } from 'react-icons/io5';
import { RiHome6Line } from 'react-icons/ri';
import FooterLink from '../FooterLink/FooterLink';
import FooterModal from '../FooterModal/FooterModal';
import ModalButton from '../FooterModal/ModalButton/ModalButton';

const FooterMobile: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <FooterModal isOpen={isModalOpen} />

      <div className={styles.footerMobile}>
        <div className={styles.menu}>
          <FooterLink title={'Мой Иви'} href={'/'}>
            <RiHome6Line className={styles.icon} />
          </FooterLink>
          <FooterLink title={'Каталог'} href={'/'}>
            <HiOutlineFolder className={styles.icon} />
          </FooterLink>
          <FooterLink title={'Поиск'} href={'/'}>
            <BiSearch className={styles.icon} />
          </FooterLink>
          <FooterLink title={'TV+'} href={'/'}>
            <IoTvOutline className={styles.icon} />
          </FooterLink>
          {isModalOpen ? (
            <ModalButton
              title={'Закрыть'}
              openModal={() => setIsModalOpen(false)}
              isOpen={isModalOpen}
            >
              <IoCloseOutline className={styles.icon} />
            </ModalButton>
          ) : (
            <ModalButton title={'Ещё'} openModal={() => setIsModalOpen(true)} isOpen={isModalOpen}>
              <HiDotsHorizontal className={styles.icon} />
            </ModalButton>
          )}
        </div>
      </div>
    </>
  );
};

export default FooterMobile;

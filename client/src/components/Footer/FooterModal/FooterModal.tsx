import { FC, useState } from 'react';
import styles from './FooterModal.module.scss';
import { Button } from '@/components/Button/Button';
import { MdOutlineDiamond, MdOutlineVideoLibrary } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';

import cn from 'classnames';
import { SlDiamond } from 'react-icons/sl';
import ModalList from './ModalList/ModalList';
import Link from 'next/link';
import { BsCameraReels } from 'react-icons/bs';
import { TbTractor } from 'react-icons/tb';
import { IoTv, IoTvOutline } from 'react-icons/io5';
import { FaLinkedinIn, FaOdnoklassniki, FaTelegramPlane, FaTwitter, FaVk } from 'react-icons/fa';
import { CgPhone } from 'react-icons/cg';

export type FooterModalProps = {
  isOpen: boolean;
};

const FooterModal: FC<FooterModalProps> = ({ isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={cn(styles.menuItem, styles.buttons)}>
            <Button size="L" className={cn(styles.buttonSubscribe, styles.button)}>
              <SlDiamond />
              Подключить подписку
            </Button>
            <Button size="L" className={styles.button}>
              <FiAward />
              Активация сертификата
            </Button>
          </div>
          <div className={styles.menuItem}>
            <Link href={'#'}>Мой Иви</Link>
            <Link href={'#'}>Что нового</Link>
            <div>
              <BsCameraReels />
              <ModalList title={'Фильмы'}>Жанры</ModalList>
            </div>
            <div>
              <MdOutlineVideoLibrary />
              <ModalList title={'Сериалы'}>Жанры</ModalList>
            </div>
            <div>
              <TbTractor />
              <ModalList title={'Мультфильмы'}>Жанры</ModalList>
            </div>
            <div>
              <IoTvOutline />
              <ModalList title={'TV+'}>Жанры</ModalList>
            </div>

            <div>Что посмотреть</div>
          </div>
          <div className={styles.menuItem}>
            <div>Иви.Рейтинг фильмы</div>
            <div>Иви.Рейтинг сериалы</div>
          </div>
          <div className={styles.menuItem}>
            <div>
              <ModalList title={'О нас'}>Жанры</ModalList>
            </div>
            <div>Вход по коду</div>
            <div className={styles.buttons}>
              <Button>Смотрите на Smart TV</Button>
              <Button>Все устройства</Button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <ModalList title={'Служба поддержки'}>Жанры</ModalList>
          </div>
          <div className={styles.menuItem}>
            <div className={cn(styles.social, styles.buttons)}>
              <Button appearance={'circle'}>
                <FaVk />
              </Button>
              <Button appearance={'circle'}>
                <FaOdnoklassniki />
              </Button>
              <Button appearance={'circle'}>
                <FaTwitter />
              </Button>
              <Button appearance={'circle'}>
                <CgPhone />
              </Button>
              <Button appearance={'circle'}>
                <FaLinkedinIn />
              </Button>
              <Button appearance={'circle'}>
                <FaTelegramPlane />
              </Button>
            </div>
            <div>
              <div> © 2023 ООО «Иви.ру» </div>
              HBO ® and related service marks are the property of Home Box Office, Inc
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FooterModal;

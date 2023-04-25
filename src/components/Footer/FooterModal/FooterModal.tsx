import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './FooterModal.module.scss';
import { FooterModalProps } from './FooterModal.props';
import { Button } from '@/components/Button/Button';
import { P } from '@/components/P/P';
import ModalList from './ModalList/ModalList';
import { MdOutlineVideoLibrary } from 'react-icons/md';
import { FiAward } from 'react-icons/fi';
import { SlDiamond } from 'react-icons/sl';
import { BsCameraReels } from 'react-icons/bs';
import { TbDeviceTv, TbTractor } from 'react-icons/tb';
import { IoMailOutline, IoTv, IoTvOutline } from 'react-icons/io5';
import { FaLinkedinIn, FaOdnoklassniki, FaTelegramPlane, FaTwitter, FaVk } from 'react-icons/fa';
import { CgPhone } from 'react-icons/cg';
import { BiDevices, BiInfoCircle, BiMessageAlt } from 'react-icons/bi';
import { HiPhone } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';

const FooterModal: FC<FooterModalProps> = ({ isOpen }) => {
  const { t } = useTranslation();
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
            <Link href={'#'} className={styles.link}>
              {t('sections.my-ivi')}
            </Link>
            <Link href={'#'} className={styles.link}>
              {t('sections.whats-new')}
            </Link>
            <ModalList title={t('sections.movies')} icon={BsCameraReels} isFilms={true}></ModalList>
            <ModalList
              title={t('sections.series')}
              icon={MdOutlineVideoLibrary}
              isFilms={true}
            ></ModalList>
            <ModalList title={t('sections.animation')} icon={TbTractor} isFilms={true}></ModalList>
            <ModalList title={'TV+'} icon={IoTvOutline}>
              <div className={styles.list}>
                <p>TB онлайн</p>
                <Link href={'https://www.ivi.ru/tvplus#'} className={styles.listLink}>
                  ТВ-каналы
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/razvlekatelnoe'} className={styles.listLink}>
                  Развлекательное
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/deti'} className={styles.listLink}>
                  Дети
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/sport'} className={styles.listLink}>
                  Спортивное ТВ
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/documentalnoe'} className={styles.listLink}>
                  Документальное
                </Link>
              </div>
            </ModalList>
            <Link href={'https://www.ivi.ru/goodmovies'} className={styles.link}>
              Что посмотреть
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href={'#'} className={styles.link}>
              Иви.Рейтинг фильмы
            </Link>
            <Link href={'#'} className={styles.link}>
              Иви.Рейтинг сериалы
            </Link>
          </div>
          <div className={styles.menuItem}>
            <ModalList title={t('footer.about-us')} icon={BiInfoCircle}>
              <div className={styles.list}>
                <Link href={'https://corp.ivi.ru/'} className={styles.listLink}>
                  {t('footer.about-company')}
                </Link>
                <Link
                  href={'https://corp.ivi.ru/career/#career-vacancy-block'}
                  className={styles.listLink}
                >
                  {t('footer.vacancies')}
                </Link>
                <Link href={'https://www.ivi.ru/pages/beta/'} className={styles.listLink}>
                  {t('footer.beta')}
                </Link>
                <Link href={'https://www.ivi.ru/info/partners'} className={styles.listLink}>
                  {t('footer.partners')}
                </Link>
                <Link href={'https://corp.ivi.ru/advertisers/'} className={styles.listLink}>
                  {t('footer.advertisers')}
                </Link>
                <Link href={'https://www.ivi.ru/info/agreement'} className={styles.listLink}>
                  {t('footer.agreement')}
                </Link>
                <Link href={'https://www.ivi.ru/info/confidential'} className={styles.listLink}>
                  {t('footer.confidential')}
                </Link>
                <Link
                  href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}
                  className={styles.listLink}
                >
                  {t('footer.compliance')}
                </Link>
              </div>
            </ModalList>
            <Link href={'#'} className={cn(styles.link, styles.flex)}>
              <TbDeviceTv />
              Вход по коду
            </Link>
            <div className={styles.buttons}>
              <Button>
                <IoTv />
                <div>
                  <span>{t('footer.watch-on')}</span>
                  Smart TV
                </div>
              </Button>
              <Button>
                <BiDevices />
                {t('footer.all-devices')}
              </Button>
            </div>
          </div>
          <div className={styles.menuItem}>
            <ModalList title={t('footer.support')} icon={BiMessageAlt}>
              <div className={styles.list}>
                <div>
                  <P>{t('footer.ready-to-help')}</P>
                  <P>{t('footer.anytime')}</P>
                </div>
                <div className={cn(styles.flex, styles.feedbackButtons)}>
                  <Link href={'https://www.ivi.ru/profile'}>
                    <Button className={styles.button}>{t('footer.chat-us')}</Button>
                  </Link>
                  <Button appearance={'square'}>
                    <IoMailOutline />
                  </Button>
                  <Button appearance={'square'}>
                    <HiPhone />
                  </Button>
                </div>
                <div>
                  <Link href={'https://ask.ivi.ru/'} className={styles.askLink}>
                    ask.ivi.ru
                  </Link>
                  <P>{t('footer.answers')}</P>
                </div>
              </div>
            </ModalList>
          </div>
          <div className={styles.menuItem}>
            <div className={styles.social}>
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

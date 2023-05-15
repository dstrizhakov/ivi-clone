import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import styles from './FooterModal.module.scss';
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
import { usePreventScroll } from '@/hooks/usePreventScroll';
import { selectModal, setShowFooterModal } from '@/store/reducers/modals.slice';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { BtnA, BtnS } from '@/components/Button/Button.props';

const FooterModal: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const { showFooterModal } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();
  usePreventScroll(showFooterModal);
  useEscapeKey(() => dispatch(setShowFooterModal(false)));
  return (
    <>
      {showFooterModal && (
        <div className={styles.modal}>
          <div className={cn(styles.menuItem, styles.buttons)}>
            <Button size={BtnS.L} className={cn(styles.buttonSubscribe, styles.button)}>
              <SlDiamond />
              {t('buttons.get-subscription')}
            </Button>
            <Button size={BtnS.L} className={styles.button}>
              <FiAward />
              {t('footer.cert')}
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
                <p>{t('categories.tv-online')}</p>
                <Link href={'https://www.ivi.ru/tvplus#'} className={styles.listLink}>
                  {t('categories.tv-channels')}
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/razvlekatelnoe'} className={styles.listLink}>
                  {t('categories.entertainment')}
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/deti'} className={styles.listLink}>
                  {t('categories.children')}
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/sport'} className={styles.listLink}>
                  {t('categories.sport-tv')}
                </Link>
                <Link href={'https://www.ivi.ru/tvplus/documentalnoe'} className={styles.listLink}>
                  {t('categories.documentary')}
                </Link>
              </div>
            </ModalList>
            <Link href={'https://www.ivi.ru/goodmovies'} className={styles.link}>
              {t('categories.what-to-watch')}
            </Link>
          </div>
          <div className={styles.menuItem}>
            <Link href={'#'} className={styles.link}>
              {t('categories.ivi-rating-movies')}
            </Link>
            <Link href={'#'} className={styles.link}>
              {t('categories.ivi-rating-series')}
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
              {t('buttons.code-login')}
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
                  <Button appearance={BtnA.square}>
                    <IoMailOutline />
                  </Button>
                  <Button appearance={BtnA.square}>
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
              <Button appearance={BtnA.circle}>
                <FaVk />
              </Button>
              <Button appearance={BtnA.circle}>
                <FaOdnoklassniki />
              </Button>
              <Button appearance={BtnA.circle}>
                <FaTwitter />
              </Button>
              <Button appearance={BtnA.circle}>
                <CgPhone />
              </Button>
              <Button appearance={BtnA.circle}>
                <FaLinkedinIn />
              </Button>
              <Button appearance={BtnA.circle}>
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

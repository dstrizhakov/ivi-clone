import { FC } from 'react';
import styles from './Footer.module.scss';
import { P } from '../P/P';
import { Button } from '../Button/Button';
import { HiOutlineMegaphone, HiPhone } from 'react-icons/hi2';
import { IoMailOutline, IoTv } from 'react-icons/io5';
import Link from 'next/link';
import {
  FaApple,
  FaGooglePlay,
  FaLinkedinIn,
  FaOdnoklassniki,
  FaTelegramPlane,
  FaTwitter,
  FaVk,
} from 'react-icons/fa';
import { BiDevices } from 'react-icons/bi';
import { CgPhone } from 'react-icons/cg';
import FooterMobile from './FooterMobile/FooterMobile';
import { useTranslation } from 'react-i18next';
import { BtnA } from '@/components/Button/Button.props';

const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const first_links = [
    {
      href: 'https://corp.ivi.ru/',
      title: t('footer.about-company'),
    },
    {
      href: 'https://corp.ivi.ru/career/#career-vacancy-block',
      title: t('footer.vacancies'),
    },
    {
      href: 'https://www.ivi.ru/pages/beta/',
      title: t('footer.beta'),
    },
    {
      href: 'https://www.ivi.ru/info/partners',
      title: t('footer.partners'),
    },
    {
      href: 'https://corp.ivi.ru/advertisers/',
      title: t('footer.advertisers'),
    },
    {
      href: 'https://www.ivi.ru/info/agreement',
      title: t('footer.agreement'),
    },
    {
      href: 'https://www.ivi.ru/info/confidential',
      title: t('footer.confidential'),
    },
    {
      href: 'https://www.ivi.ru/info/goryachaya-liniya-komplaens',
      title: t('footer.compliance'),
    },
  ];
  const second_links = [
    {
      href: '/',
      title: t('sections.my-ivi'),
    },
    {
      href: 'https://www.ivi.ru/new',
      title: t('sections.whats-new'),
    },
    {
      href: '/movies',
      title: t('sections.movies'),
    },
    {
      href: '/series',
      title: t('sections.series'),
    },
    {
      href: '/animation',
      title: t('sections.animation'),
    },
    {
      href: 'https://www.ivi.ru/tvplus',
      title: t('sections.tv-plus'),
    },
    {
      href: 'https://www.ivi.ru/goodmovies',
      title: t('sections.good-movies'),
    },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__container}>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.about-us')}</span>
              {first_links.map((link, index) => (
                <li className={styles.link} key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.sections')}</span>
              {second_links.map((link, index) => (
                <li className={styles.link} key={index}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/cert'} className={styles.certLink}>
                  {t('footer.cert')}
                </Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>{t('footer.support')}</span>
              <li>
                <P>{t('footer.ready-to-help')}</P>
                <P>{t('footer.anytime')}</P>
              </li>
              <li className={styles.buttonsGroup}>
                <Link href={'https://www.ivi.ru/profile'}>
                  <Button className={styles.button}>{t('footer.chat-us')}</Button>
                </Link>
                <Button appearance={BtnA.square}>
                  <IoMailOutline />
                </Button>
                <Button appearance={BtnA.square}>
                  <HiPhone />
                </Button>
              </li>
              <li>
                <Link href={'https://ask.ivi.ru/'} className={styles.askLink}>
                  ask.ivi.ru
                </Link>
                <P>{t('footer.answers')}</P>
              </li>
            </ul>
            <ul className={styles.list}>
              <li>
                <Link
                  href={'https://www.ivi.ru/subscribe?redirect_url=%2Fwatch%2F145146%2Fsimilar'}
                >
                  <div className={styles.widget}>
                    <HiOutlineMegaphone className={styles.widget__icon} />
                  </div>
                  <P className={styles.widget__descr}>{t('footer.watch')}</P>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerItem}>
            <div className={styles.flex}>
              <div className={styles.flex}>
                <Button>
                  <FaApple />
                  <div>
                    <span>{t('footer.download')}</span>
                    App Store
                  </div>
                </Button>
                <Button>
                  <FaGooglePlay />
                  <div>
                    <span>{t('footer.available')}</span>
                    Google Play
                  </div>
                </Button>
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
              <div className={styles.flex}>
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
            </div>
            <div>
              <P>© 2023 ООО «Иви.ру» </P>
              <P>HBO ® and related service marks are the property of Home Box Office, Inc</P>
            </div>
          </div>
        </div>
      </footer>
      <FooterMobile />
    </>
  );
};

export default Footer;

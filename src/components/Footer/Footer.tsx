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

const Footer: FC = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__container}>
            <ul className={styles.list}>
              <span className={styles.listTitle}>О нас</span>
              <li className={styles.link}>
                <Link href={'https://corp.ivi.ru/'}> О компании</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://corp.ivi.ru/career/#career-vacancy-block'}>Вакансии</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/pages/beta/'}>Программа бета-тестирования</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/info/partners'}>Информация для партнёров</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://corp.ivi.ru/advertisers/'}>Размещение рекламы</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/info/agreement'}>Пользовательское соглашение</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/info/confidential'}>
                  Политика конфиденциальности
                </Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/info/goryachaya-liniya-komplaens'}>Комплаенс</Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>Разделы</span>
              <li className={styles.link}>
                <Link href={'#'}>Мой Иви</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/new'}>Что нового</Link>
              </li>
              <li className={styles.link}>
                <Link href={'/movies'}>Фильмы</Link>
              </li>
              <li className={styles.link}>
                <Link href={'/series'}>Сериалы</Link>
              </li>
              <li className={styles.link}>
                <Link href={'/animation'}>Мультфильмы</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/tvplus'}>TV+</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/goodmovies'}>Что посмотреть</Link>
              </li>
              <li className={styles.link}>
                <Link href={'https://www.ivi.ru/cert'} className={styles.certLink}>
                  Активация сертификата
                </Link>
              </li>
            </ul>
            <ul className={styles.list}>
              <span className={styles.listTitle}>Служба поддержки</span>
              <li>
                <P>Мы всегда готовы вам помочь. </P>
                <P>Наши операторы онлайн 24/7</P>
              </li>
              <li className={styles.buttonsGroup}>
                <Link href={'https://www.ivi.ru/profile'}>
                  <Button className={styles.button}>Написать в чате</Button>
                </Link>
                <Button appearance={'square'}>
                  <IoMailOutline />
                </Button>
                <Button appearance={'square'}>
                  <HiPhone />
                </Button>
              </li>
              <li>
                <Link href={'https://ask.ivi.ru/'} className={styles.askLink}>
                  ask.ivi.ru
                </Link>
                <P>Ответы на вопросы</P>
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
                  <P className={styles.widget__descr}>
                    Смотрите фильмы, сериалы и мультфильмы без рекламы
                  </P>
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
                    <span>Загрузить в</span>
                    App Store
                  </div>
                </Button>
                <Button>
                  <FaGooglePlay />
                  <div>
                    <span>Доступно в</span>
                    Google Play
                  </div>
                </Button>
                <Button>
                  <IoTv />
                  <div>
                    <span>Смотрите на</span>
                    Smart TV
                  </div>
                </Button>
                <Button>
                  <BiDevices />
                  Все устройства
                </Button>
              </div>
              <div className={styles.flex}>
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

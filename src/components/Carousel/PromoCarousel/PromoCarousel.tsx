import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PromoCarousel.module.scss';
import NextArrow from '@/components/Carousel/NextArrow';
import PrevArrow from '@/components/Carousel/PrevArrow';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import PromotionButton from '@/components/Profile/ProfilePage/ProfileBtns/PromotionButton';
import { iCardEnum } from '@/components/Profile/ProfileButton/ProfileButtons.props';
import ActivateCertificateButton from '@/components/Profile/ProfilePage/ProfileBtns/ActivateCertificateButton';
import i18next from 'i18next';
import Image from 'next/image';
import { BtnA } from '@/components/Button/Button.props';

interface iMockCarousel {
  id: number;
  name: string;
  description: string;
  enDescription: string;
  logo: string;
  card_image: string;
  btn: string;
}

interface iSlide {
  i: iMockCarousel;
}

const PromoCarouselSlide: FC<iSlide> = ({ i }): JSX.Element => {
  return (
    <Link href={'/movies'}>
      <div className={styles.img}>
        <img src={i.card_image} alt={'watch more'} />
        {/* <Image
          src={i.card_image}
          alt={'watch more'}
          width={1216}
          height={524}
          quality={100}
          priority
        /> */}
      </div>
      <div className={styles.items}>
        <div className={styles.content_container}>
          <div className={styles.logo}>
            <Image src={i.logo} alt="logo" width={330} height={330} />
          </div>
          <div className={styles.synopsis}>
            {i18next.language == 'ru' ? i.description : i.enDescription}
          </div>
        </div>
        <Button appearance={BtnA.red} title={i.btn}>
          {i.btn}
        </Button>
      </div>
    </Link>
  );
};

const PromoCarousel: FC = () => {
  const { t } = useTranslation();
  const mockCarousel: iMockCarousel[] = [
    {
      id: 1,
      name: 'Шпион',
      description:
        'Сотрудник ФСБ с тёмным прошлым защищает свою страну. Детектив с Сергеем Безруковым',
      enDescription:
        'An FSS officer with a shady past defends his country. Detective with Sergei Bezrukov',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage4/contents/0/8/e43d2485f22868f57b2dcf5193d2ad.jpg/1216x524/?q=85',
      btn: t('buttons.watch-sub'),
    },
    {
      id: 2,
      name: 'Здоровый человек',
      description:
        'Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели',
      enDescription:
        'Nikita Efremov, star of "Tetris" and "Patient Zero," gives up a prestigious job for a great cause',
      logo: 'https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85',
      btn: t('buttons.watch-free'),
    },
    {
      id: 3,
      name: 'Семья',
      description:
        'История любви девушки-психолога и главы мафии. Горячая турецкая новинка с Кыванчем Татлытугом',
      enDescription:
        'A love story between a girl psychologist and a mafia boss. Hot Turkish novel with Kivanc Tatlitug',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/e/14ad136916cb3797041ef18a0b6149.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage6/contents/a/d/9c7a06852d0d87d206bdcc1c54899e.jpg/1216x524/?q=85',
      btn: t('buttons.watch-collection'),
    },
    {
      id: 4,
      name: 'Изумитьельный Морис',
      description:
        'Обаятельный кот и умные крысы проворачивают хитрые аферы. По книге Терри Пратчетта',
      enDescription:
        'A charming cat and clever rats pull some clever scams. Based on a book by Terry Pratchett',
      logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/a/e175075e82d7ec21518b793875d4b7.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage28/contents/4/2/3b902683579802bb9161649c3edbdf.jpg/1216x524/?q=85',
      btn: t('buttons.watch'),
    },
    {
      id: 5,
      name: 'Война миров: Вторжение',
      description:
        'Трое студентов оказываются в центре сражения земных войск и смертоносных боевых машин марсиан',
      enDescription:
        'Three students find themselves in the middle of a battle between Earth troops and deadly Martian war machines',
      logo: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/f/856da932e9a08d6dd0fbb80fa73ddd.png/x200/',
      card_image:
        'https://thumbs.dfs.ivi.ru/storage9/contents/1/e/4f4ce4b4ce28c5a287bd461172f714.jpg/1216x524/?q=85',
      btn: t('buttons.watch-sub'),
    },
  ];
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: <NextArrow variant="promo" />,
    prevArrow: <PrevArrow variant="promo" />,
  };

  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {mockCarousel.map((i: iMockCarousel) => (
            <div className={styles.item} key={i.id}>
              <PromoCarouselSlide i={i} />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.promo_buttons}>
        <PromotionButton type={iCardEnum.rect_icon_purple} />
        <ActivateCertificateButton type={iCardEnum.rect_icon} />
      </div>
    </>
  );
};

export default PromoCarousel;

import React, { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './PromoCarousel.module.scss';
import { NextArrow } from '@/components/Carousel/NextArrow';
import { PrevArrow } from '@/components/Carousel/PrevArrow';
import { Button } from '@/components/Button/Button';
import Link from 'next/link';

const mockCarousel = [
  {
    id: 1,
    name: 'Шпион',
    description:
      'Сотрудник ФСБ с тёмным прошлым защищает свою страну. Детектив с Сергеем Безруковым',
    logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/b/6/356258bbe7c5ba5b5b40251be3d48f.png/x200/',
    img: 'https://thumbs.dfs.ivi.ru/storage4/contents/0/8/e43d2485f22868f57b2dcf5193d2ad.jpg/1216x524/?q=85',
    btn: 'Смотреть по подписке',
  },
  {
    id: 2,
    name: 'Здоровый человек',
    description:
      'Звезда «Тетриса» и «Нулевого пациента» Никита Ефремов бросает престижную работу ради великой цели',
    logo: 'https://thumbs.dfs.ivi.ru/storage30/contents/a/a/c55629c1cb82b0ac7c0d9aca539d89.png/x200/',
    img: 'https://thumbs.dfs.ivi.ru/storage15/contents/b/d/03674ff6e27da1cd69f1f0e9337249.jpg/1216x524/?q=85',
    btn: 'Смотреть бесплатно',
  },
  {
    id: 3,
    name: 'Семья',
    description:
      'История любви девушки-психолога и главы мафии. Горячая турецкая новинка с Кыванчем Татлытугом',
    logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/e/14ad136916cb3797041ef18a0b6149.png/x200/',
    img: 'https://thumbs.dfs.ivi.ru/storage6/contents/a/d/9c7a06852d0d87d206bdcc1c54899e.jpg/1216x524/?q=85',
    btn: 'Посмотреть подборку',
  },
  {
    id: 4,
    name: 'Изумрудный Морис',
    description:
      'Обаятельный кот и умные крысы проворачивают хитрые аферы. По книге Терри Пратчетта',
    logo: 'https://thumbs.dfs.ivi.ru/storage9/contents/d/a/e175075e82d7ec21518b793875d4b7.png/x200/',
    img: 'https://thumbs.dfs.ivi.ru/storage28/contents/4/2/3b902683579802bb9161649c3edbdf.jpg/1216x524/?q=85',
    btn: 'Смотреть',
  },
];

const PromoCarousel: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    draggable: true,
    lazyLoad: 'progressive',
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className={styles.carousel}>
        <Slider {...settings}>
          {mockCarousel.map((i) => (
            <div className={styles.item} key={i.id}>
              <div className={styles.img}>
                <img src={i.img} alt={i.name} />
              </div>
              <div className={styles.items}>
                <div className={styles.content_container}>
                  <img src={i.logo} alt="logo" />
                  <div className={styles.synopsis}>{i.description}</div>
                </div>
                <Link href={'/movies'}>
                  <Button appearance={'red'}>{i.btn}</Button>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default PromoCarousel;

import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import Description from '@/components/Description/Description';
import styles from '@/components/Description/Description.module.scss';

const MainPageDescription = () => {
  return (
    <Description
      title={
        <Htag tag={'h4'}>
          Онлайн-кинотеатр Иви: фильмы в хорошем качестве всегда приносят настоящее удовольствие
        </Htag>
      }
      cut={
        <P size={'M'}>
          Каждый день миллионы людей ищут фильмы онлайн, и никто не хочет усложнять себе жизнь – и
          вы наверняка один из них! А раз так, то Иви – это именно тот ресурс, который вам нужен. От
          лучших кинолент в HD-качестве вас отделяет буквально один клик. Мы не просто освобождаем
          освобождаем от необходимости идти в кинотеатр или изучать программу телепередач – у
          посетителей нашего ресурса гораздо больше возможностей
        </P>
      }
    >
      <>
        <P size={'M'}>
          Видеотека Иви – это постоянно пополняющаяся коллекция в рунете, которая насчитывает более
          более 60 тысяч и зарубежного контента, доступного для просмотра онлайн. Мы первыми в
          подписали контракты с крупнейшими голливудскими студиями (Walt Disney, Warner Bros., Sony,
          20th Century Fox, Universal, Paramount, MGM и другими) и на постоянной основе сотрудничаем
          с крупнейшими российскими компаниями и телеканалами.
        </P>
        <P size={'M'}>Онлайн-кинотеатр ivi.ru – это:</P>
        <ol className={styles.list}>
          <li>
            <P size={'M'}>
              уникальная рекомендательная система, учитывающая ваши предпочтения и предлагающая
              посмотреть именно то, что точно придется вам по душе;
            </P>
          </li>
          <li>
            <P size={'M'}>
              просмотр в одно касание на любом из устройств, подключенном к вашему Иви-аккаунту – от
              смартфонов до телевизоров с технологией Smart TV;
            </P>
          </li>
          <li>
            <P size={'M'}>
              возможность скачивать в память мобильного устройства лицензионный контент и смотреть
              его без доступа к Интернету;
            </P>
          </li>
          <li>
            <P size={'M'}>
              уникальные условия и преимущества для обладателей подписки Иви, делающей кинопросмотр
              комфортным и приятным;
            </P>
          </li>
          <li>
            <P size={'M'}>
              удобная и продвинутая система уведомлений, вы не пропустите выход крутого обсуждаемого
              блокбастера – мы известим о появлении подходящим для вас способом;
            </P>
          </li>
          <li>
            <P size={'M'}>
              возможность добавлять фильмы в «смотреть позже», чтобы вернуться к ним в свободное
              время;
            </P>
          </li>
          <li>
            <P size={'M'}>
              контент, для просмотра которого не требуется устанавливать видеоплееры или искать
              кодеки;
            </P>
          </li>
          <li>
            <P size={'M'}>просмотр онлайн контента хорошего разрешения без регистрации и смс.</P>
          </li>
        </ol>
        <P size={'M'}>
          Откройте для себя возможность смотреть фильмы онлайн бесплатно в отличном качестве с
          кинотеатром Иви!
        </P>
      </>
    </Description>
  );
};

export default MainPageDescription;
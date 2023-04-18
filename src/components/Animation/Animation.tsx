import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import Description from '@/components/Description/Description';

const Animation = () => {
  return (
    <>
      <Description
        title={<Htag tag={'h3'}>Мультфильмы смотреть онлайн</Htag>}
        cut={
          <P size={'M'}>
            Хотите смотреть мультфильмы онлайн бесплатно в хорошем качестве? Тогда милости просим на
            наш портал! Мы собрали для вас лучшие мультфильмы, снятые выдающимися советскими,
            российскими и голливудскими мультипликаторами. Они увлекут вас и ваших детишек в
            волшебный мир удивительных приключений и сказочных персонажей. А еще – гарантированно
            поднимут настроение и помогут отвлечься от рутинных будней.
          </P>
        }
      >
        <>
          <P size={'M'}>
            Найти на просторах Интернета мультфильмы в хорошем качестве совсем не просто. На
            большинстве порталов бесплатные мультики сильно сжаты, поэтому смотреть мультфильмы
            бесплатно не очень-то интересно. Блеклые краски, низкое качество звука – все это заметно
            отвлекает от просмотра и доставляет ощутимый дискомфорт. Но на нашем портале у вас есть
            возможность смотреть мультфильмы в хорошем качестве и с объемным звуком, при этом
            совершенно бесплатно!
          </P>
          <P size={'M'}>
            Представленная в разделе коллекция мультфильмов поражает. Здесь и с детства знакомая нам
            советская классика, и самые громкие голливудские премьеры последних лет. Не секрет, что
            в анимационные фильмы на Западе вкладываются такие же большие деньги, как и в обычные
            игровые. Поэтому и по своей зрелищности они мало в чем уступают самым ожидаемым
            блокбастерам. Смотреть такое видео мультфильмы онлайн очень интересно и увлекательно.
          </P>
          <P size={'M'}>
            Все мультфильмы без регистрации бесплатно очень быстро загружаются. Вам не придется
            подолгу сидеть у монитора, ожидая, когда можно будет смотреть бесплатные онлайн
            мультики. Также наши мультики онлайн не прерываются на назойливую рекламу.
          </P>
          <P size={'M'}>
            Вы можете смотреть бесплатные мультфильмы хоть каждый день – у нас нет ограничений на
            просмотры. Именно поэтому смотреть лучшие мультфильмы онлайн можно в любое удобное для
            вас время. Так что если хотите хороший мульт смотреть онлайн – сделайте это прямо
            сейчас! Зовите детей и мужа, усаживайтесь поудобнее и смотрите лучшие российские и
            голливудские мультфильмы онлайн бесплатно!
          </P>
        </>
      </Description>
    </>
  );
};

export default Animation;

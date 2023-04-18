import React from 'react';
import { Htag } from '@/components/Htag/Htag';
import { P } from '@/components/P/P';
import Description from '@/components/Description/Description';

const SeriesPageDescription = () => {
  const size = 'M';
  return (
    <Description
      title={<Htag tag={'h2'}>Сериалы смотреть онлайн</Htag>}
      cut={
        <P size={size}>
          Многие современные сериалы по своей зрелищности и сюжетным перипетиям мало в чем уступают
          полнометражным фильмам. Они с первой серии захватывают ваше внимание и заставляют с
          большим нетерпением ожидать каждого следующего эпизода. Так что сезоны сериалов пролетают
          для их зрителей незаметно!
        </P>
      }
    >
      <>
        <P size={size}>
          Многие современные сериалы по своей зрелищности и сюжетным перипетиям мало в чем уступают
          полнометражным фильмам. Они с первой серии захватывают ваше внимание и заставляют с
          большим нетерпением ожидать каждого следующего эпизода. Так что сезоны сериалов пролетают
          для их зрителей незаметно!
        </P>
        <P size={size}>
          Многие люди хотят смотреть сериалы онлайн без регистрации. И действительно, зачем тратить
          время на эту бесполезную процедуру, если без нее вполне можно обойтись? У нас вы можете
          смотреть любые понравившиеся сериалы онлайн бесплатно без регистрации, в любое удобное для
          вас время. Все бесплатные сериалы предлагаются в очень хорошем качестве, с объемным
          звуком. Так что смотреть бесплатно сериалы и выгодно, и очень зрелищно!
        </P>
        <P size={size}>
          Также вы можете смотреть сериалы без назойливой рекламы, прерывающей картину на самом
          интересном месте. Именно поэтому смотреть сериалы онлайн рекомендуется всем, кто устал от
          современного телевидения с его длинными рекламными роликами.
        </P>
        <P size={size}>
          Смотреть выбранный вами сериал онлайн бесплатно можно в любое время суток. При этом мы
          всегда гарантируем вам быструю загрузку и звук превосходного качества. Так что зовите
          членов вашей семьи и начинайте смотреть сериал онлайн прямо сейчас!
        </P>
      </>
    </Description>
  );
};

export default SeriesPageDescription;

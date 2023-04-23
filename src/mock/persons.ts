import { IPerson } from '@/types/types';

const src1 =
  'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85';
const src2 =
  'https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360/?q=85';

export const persons: IPerson[] = [
  {
    url: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85',
    name: 'Оскар Айзек',
    enName: 'Oscar Isaak',
    description:
      'Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».',
    films: [
      { id: 1, name: 'Name', year: '2020', rating: '4.5', img: src1 },
      { id: 2, name: 'Name2', year: '2021', rating: '4.2', img: src2 },
      { id: 3, name: 'Name3', year: '2020', rating: '4.5', img: src1 },
      { id: 4, name: 'Name4', year: '2021', rating: '4.2', img: src2 },
      { id: 5, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
    ],
  },
  {
    url: 'https://thumbs.dfs.ivi.ru/storage9/contents/f/e/26bda1add19e61753e5e852054a96f.jpeg/120x144/?q=85',
    name: 'Сет Роген',
    enName: 'Seth Rogen',
    description:
      'Сет Роген (англ. Seth Rogen) — канадский актер, комик и сценарист. Наибольшую известность получил за свои роли в фильмах «Жизнь прекрасна» и «SuperПерцы».',
    films: [
      { id: 5, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 6, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 7, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 8, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 9, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 10, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    url: '	https://thumbs.dfs.ivi.ru/storage9/contents/3/e/3a98ea123e47135da2d1a9a4dd50cf.jpg/120x144/?q=85',
    name: 'Стеллан Скарсгард',
    enName: 'Stellan Skarsgard',
    description:
      'Стеллан Скарсгард (Stellan Skarsgård) — шведский актер театра и кино. Наибольшую известность получил за свои роли в фильмах «Умница Уилл Хантинг», «Рассекая волны», «Девушка с татуировкой дракона», «Спаситель» и «Король чертова острова».',
    films: [
      { id: 3, name: 'Name3', year: '2020', rating: '4.5', img: src1 },
      { id: 4, name: 'Name4', year: '2021', rating: '4.2', img: src2 },
      { id: 5, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 6, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 7, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
    ],
  },
];

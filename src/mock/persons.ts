import { IPerson } from '@/types/types';

const src1 =
  'https://thumbs.dfs.ivi.ru/storage31/contents/1/a/930dc6b17e3a89b29615929bd86041.jpg/234x360/?q=85';
const src2 =
  'https://thumbs.dfs.ivi.ru/storage28/contents/0/8/3d2850061083ba6946ad877bc9102d.jpg/234x360/?q=85';

export const persons: IPerson[] = [
  {
    id: 1,
    url: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85',
    name: 'Оскар Айзек',
    enName: 'Oscar Isaak',
    description:
      'Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».',
    films: [
      { id: 518, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 618, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 718, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 818, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 918, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1018, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 2,
    url: 'https://thumbs.dfs.ivi.ru/storage9/contents/f/e/26bda1add19e61753e5e852054a96f.jpeg/120x144/?q=85',
    name: 'Сет Роген',
    enName: 'Seth Rogen',
    description:
      'Сет Роген (англ. Seth Rogen) — канадский актер, комик и сценарист. Наибольшую известность получил за свои роли в фильмах «Жизнь прекрасна» и «SuperПерцы».',
    films: [
      { id: 517, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 617, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 717, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 817, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 917, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1017, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 3,
    url: '	https://thumbs.dfs.ivi.ru/storage9/contents/3/e/3a98ea123e47135da2d1a9a4dd50cf.jpg/120x144/?q=85',
    name: 'Стеллан Скарсгард',
    enName: 'Stellan Skarsgard',
    description:
      'Стеллан Скарсгард (Stellan Skarsgård) — шведский актер театра и кино. Наибольшую известность получил за свои роли в фильмах «Умница Уилл Хантинг», «Рассекая волны», «Девушка с татуировкой дракона», «Спаситель» и «Король чертова острова».',
    films: [
      { id: 516, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 616, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 716, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 816, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 916, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1016, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 4,
    url: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85',
    name: 'Оскар Айзек',
    enName: 'Oscar Isaak',
    descr:
      'Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».',
    films: [
      { id: 515, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 615, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 715, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 815, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 915, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1015, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 5,
    url: 'https://thumbs.dfs.ivi.ru/storage9/contents/f/e/26bda1add19e61753e5e852054a96f.jpeg/120x144/?q=85',
    name: 'Сет Роген',
    enName: 'Seth Rogen',
    descr:
      'Сет Роген (англ. Seth Rogen) — канадский актер, комик и сценарист. Наибольшую известность получил за свои роли в фильмах «Жизнь прекрасна» и «SuperПерцы».',
    films: [
      { id: 514, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 614, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 714, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 814, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 914, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1014, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 6,
    url: '	https://thumbs.dfs.ivi.ru/storage9/contents/3/e/3a98ea123e47135da2d1a9a4dd50cf.jpg/120x144/?q=85',
    name: 'Стеллан Скарсгард',
    enName: 'Stellan Skarsgard',
    descr:
      'Стеллан Скарсгард (Stellan Skarsgård) — шведский актер театра и кино. Наибольшую известность получил за свои роли в фильмах «Умница Уилл Хантинг», «Рассекая волны», «Девушка с татуировкой дракона», «Спаситель» и «Король чертова острова».',
    films: [
      { id: 513, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 613, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 713, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 813, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 913, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1013, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 7,
    url: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/6/b7f9eef3eaeb3d500cd994fb130047.jpg/120x144/?q=85',
    name: 'Оскар Айзек',
    enName: 'Oscar Isaak',
    descr:
      'Оскар Айзек (Oscar Isaak Hernandez) - американский актер, ставший известным благодаря главной роли в картине братьев Коэн «Внутри Льюина Дэвиса».',
    films: [
      { id: 512, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 612, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 712, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 812, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 912, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1012, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 8,
    url: 'https://thumbs.dfs.ivi.ru/storage9/contents/f/e/26bda1add19e61753e5e852054a96f.jpeg/120x144/?q=85',
    name: 'Сет Роген',
    enName: 'Seth Rogen',
    descr:
      'Сет Роген (англ. Seth Rogen) — канадский актер, комик и сценарист. Наибольшую известность получил за свои роли в фильмах «Жизнь прекрасна» и «SuperПерцы».',
    films: [
      { id: 511, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 611, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 711, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 811, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 911, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1011, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
  {
    id: 9,
    url: '	https://thumbs.dfs.ivi.ru/storage9/contents/3/e/3a98ea123e47135da2d1a9a4dd50cf.jpg/120x144/?q=85',
    name: 'Стеллан Скарсгард',
    enName: 'Stellan Skarsgard',
    descr:
      'Стеллан Скарсгард (Stellan Skarsgård) — шведский актер театра и кино. Наибольшую известность получил за свои роли в фильмах «Умница Уилл Хантинг», «Рассекая волны», «Девушка с татуировкой дракона», «Спаситель» и «Король чертова острова».',
    films: [
      { id: 510, name: 'Name5', year: '2020', rating: '4.5', img: src1 },
      { id: 610, name: 'Name6', year: '2021', rating: '4.2', img: src2 },
      { id: 710, name: 'Name7', year: '2020', rating: '4.5', img: src1 },
      { id: 810, name: 'Name8', year: '2021', rating: '4.2', img: src2 },
      { id: 910, name: 'Name9', year: '2020', rating: '4.5', img: src1 },
      { id: 1010, name: 'Name10', year: '2021', rating: '4.2', img: src2 },
    ],
  },
];

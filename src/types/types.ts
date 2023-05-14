export interface ILink {
  title: string;
  link: string;
}
export interface IPerson {
  id: number;
  url: string;
  name: string;
  enName: string;
  description: string;
  films: any; //todo: change to IMovie
}
export interface IMovie {
  id: number;
  name: string;
  enName: string;
  description: string;
  enDescription?: string;
  trailer: string;
  card_image: string;
  year: string;
  countries: string[]; //всегда массив (иначе лищняя проверка типа), в карточках используем первое значение
  rating: string;
  genres: string[];
  duration: string;
  persons: IPerson[];
}

export interface IUser {
  userId?: number | null;
  image?: string | null; //
  name?: string | null;
  email?: string | null;
}

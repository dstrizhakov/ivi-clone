export interface ILink {
  title: string;
  link: string;
}

//старые типы:

export interface IMovieOld {
  id: number | string;
  title: string;
  originalTitle: string;
  slogan: string;
  originalSlogan: string;
  trailer: string;
  card_image: string;
  year: string;
  countries: string[]; //всегда массив (иначе лишняя проверка типа), в карточках используем первое значение
  rating: string;
  genres: string[];
  duration: string;
  persons: IPersonOld[];
}

export interface IPersonOld {
  id: number;
  url: string;
  name: string;
  enName: string;
  description: string;
  films: IMovieOld[];
}

//типы по документации:

export interface IFilmViews {
  //просмотры фильма
  id: number;
  countryId: number;
  premiere_date: string;
  premiere_place: string;
  viewersCount: number;
}

export interface IGenres {
  //жанры
  id: number;
  genreName: string;
  genreNameEn: string;
}

export interface IRole {
  //роль
  id: number;
  roleName: string;
}

export interface IActor {
  //актер
  id: number;
  fullName: string;
  fullNameEn: string;
  photo: string;
  personInFilm: string[];
  role: IRole;
}

export interface IPersonsInFilm {
  //персоны
  id: number;
  filmId: number;
  actorId: number;
  roleId: number;
  roleNotes: string;
  film: string;
  actor: IActor;
}

export interface ICountry {
  //страна
  id: number;
  filmsCreated: string[];
  filmViews: IFilmViews[];
}

export interface IAgeRestriction {
  //ограничение по возрасту
  id: number;
  url: string;
  abbreviation: string;
  minAge: string;
  description: string;
}

export interface IComment {
  //комментарии к отзыву
  id: number;
  reviewId: number;
  parentCommentId: number;
  profile: number;
  text: string;
  review: string;
  parentComment: string;
  children: IComment[];
}

export interface IReviews {
  //отзыв к фильму
  id: number;
  url: string;
  title: string;
  text: string;
  filmId: number;
  profileId: number;
  isPositive: boolean;
  comments: IComment[];
  film: string;
}
export interface IDuration {
  hours: number;
}

export interface IMovie {
  //фильм
  id: number | string; //
  year: number;
  title: string;
  preview: string;
  originalTitle?: string;
  slogan: string;
  originalSlogan?: string;
  trailer: string;
  countryId: number;
  ageRestrictionId: number;
  personsInFilm: IPersonsInFilm[];
  filmGenres: IGenres[];
  duration: IDuration;
  ageRestriction: IAgeRestriction[];
  reviews: IReviews[];
  country: ICountry;
  //нет в документации
  card_image: string;
  logo?: string;
}

export interface IUser {
  // userId?: number;
  email: string | null;
  password: string;
  name: string;
  surname: string;
  nickname: string;
  country: string;
  photo?: string;
  city: string;
  role: IRole[];
}

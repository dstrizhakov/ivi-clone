export interface iMovie {
  //mock
  id: number;
  name: string;
  img: string;
}

export interface CardProps {
  card: iMovie;
  hover?: boolean;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  openRating?: () => void;
}

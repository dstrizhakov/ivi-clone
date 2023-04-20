export interface iMovie {
  //mock
  id: number;
  name: string;
  img: string;
}

export interface CardProps {
  card: iMovie;
  star?: boolean;
  book?: boolean;
  find?: boolean;
  block?: boolean;
  openRating?: () => void;
}

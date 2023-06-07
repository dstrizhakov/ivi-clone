import { IPersonOld, IPersonsInFilm } from '@/types/types';

export interface PersonsGalleryProps {
  list: IPersonOld[] | IPersonsInFilm[];
}

import { IPerson } from '@/types/types';

export interface PersonsGalleryProps {
  list: IPerson[];
  openModal: () => void;
}

import { IMovie } from '@/types/types';

export interface PersonsModalProps {
  item: IMovie;
  isOpen: boolean;
  closeModal: () => void;
}

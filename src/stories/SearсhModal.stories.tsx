import SearchModal from '@/components/Header/Search/SearchModal/SearchModal';
import SearchButton from '@/components/Header/Search/SearchButton/SearchButton';

export default {
  title: 'Main/Search',
  component: SearchModal,
};

export const Modal = () => (
  <>
    <SearchButton />
    <SearchModal />
  </>
);

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { render } from '@testing-library/react';

export const renderWithRedux = (component) => {
  return render(<Provider store={store}>{component}</Provider>);
};

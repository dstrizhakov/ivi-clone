import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import { render } from '@testing-library/react';

export const renderWithRedux = (component) => {
  const store = makeStore();
  return render(<Provider store={store}>{component}</Provider>);
};

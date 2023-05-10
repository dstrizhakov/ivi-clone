import { Provider } from 'react-redux';
import { makeStore } from '@/store/store';
import { render } from '@testing-library/react';

export const renderWithRedux = (component, initialState) => {
  const store = makeStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
};

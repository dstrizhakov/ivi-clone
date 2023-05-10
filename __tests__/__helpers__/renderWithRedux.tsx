import { Provider } from 'react-redux';
import { createReduxStore } from '../../src/store/store';
import { render } from '@testing-library/react';

export const renderWithRedux = (component, initialState) => {
  const store = createReduxStore(initialState);
  return render(<Provider store={store}>{component}</Provider>);
};

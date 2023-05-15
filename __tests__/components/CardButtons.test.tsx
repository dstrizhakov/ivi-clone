import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import AddToFavoritesButton from '../../src/components/Card/CardButtons/AddToFavoritesButton';
import BlockButton from '../../src/components/Card/CardButtons/BlockButton';
import FindSimilarButton from '../../src/components/Card/CardButtons/FindSimilarButton';
import { Provider } from 'react-redux';
import RateButton from '../../src/components/Card/CardButtons/RateButton';
import { configureStore } from '@reduxjs/toolkit';
import modalsReducer from '../../src/store/reducers/modals.slice';
import React from 'react';

const mockStore = configureStore({ reducer: { modalsReducer } });

describe('card buttons', () => {
  afterEach(() => cleanup());
  test('add to favorite before', async () => {
    render(<AddToFavoritesButton />);
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('add to favorite after', async () => {
    render(<AddToFavoritesButton />);
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('block before', () => {
    render(<BlockButton />);
    const button = screen.getByRole('button', { name: '' });

    expect(button).toMatchSnapshot();
  });
  test('block after', () => {
    render(<BlockButton />);
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('find similar before', () => {
    render(<FindSimilarButton />);
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('find similar after', () => {
    render(<FindSimilarButton />);
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
  test('rate button before', () => {
    render(
      <Provider store={mockStore}>
        <RateButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    expect(button).toMatchSnapshot();
  });
  test('rate button after', () => {
    render(
      <Provider store={mockStore}>
        <RateButton />
      </Provider>
    );
    const button = screen.getByRole('button', { name: '' });
    fireEvent.click(button);
    expect(button).toMatchSnapshot();
  });
});

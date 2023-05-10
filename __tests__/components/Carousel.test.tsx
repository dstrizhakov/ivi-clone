import { render } from '@testing-library/react';
import React from 'react';
import Carousel from '../../src/components/Carousel/Carousel';

const testArray = [1, 2, 3, 4, 5];

describe('carousel', () => {
  test('number array', () => {
    const carousel = render(
      <Carousel title={'title'}>
        <>{testArray}</>
      </Carousel>
    );
    expect(carousel).toMatchSnapshot();
  });
  test('number array show all', () => {
    const carousel = render(
      <Carousel title={'title'} showAll>
        <>{testArray}</>
      </Carousel>
    );
    expect(carousel).toMatchSnapshot();
  });
  test('number array show all', () => {
    const carousel = render(
      <Carousel title={'title'} showAll>
        <>{testArray}</>
      </Carousel>
    );
    expect(carousel).toMatchSnapshot();
  });
});

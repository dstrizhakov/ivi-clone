import { render } from '@testing-library/react';
import React from 'react';
import Breadcrumbs from '../../src/components/Breadcrumbs/Breadcrumbs';
import MovieBreadcrumbs from '../../src/components/Breadcrumbs/MovieBreadcrumbs';

describe('breadcrumbs', () => {
  it('should be correct with 3 breadcrumbs', () => {
    const breadcrumbsMockData = [
      { name: 'breadcrumb1', path: '/' },
      { name: 'breadcrumb2', path: '/movies' },
      { name: 'breadcrumb3', path: '/movies' },
    ];
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with 2 breadcrumbs', () => {
    const breadcrumbsMockData = [
      { name: 'breadcrumb1', path: '/' },
      { name: 'breadcrumb2', path: '/movies' },
    ];
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with 1 breadcrumbs', () => {
    const breadcrumbsMockData = [{ name: 'breadcrumb1', path: '/' }];
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with no breadcrumbs', () => {
    const breadcrumbsMockData = [];
    const bc = render(<Breadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
});

describe("movie's breadcrumbs", () => {
  it('should be correct with 3', () => {
    const breadcrumbsMockData = [
      { name: 'breadcrumb1', path: '/' },
      { name: 'breadcrumb2', path: '/movies' },
      { name: 'breadcrumb3', path: '/movies' },
    ];
    const bc = render(<MovieBreadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with 2', () => {
    const breadcrumbsMockData = [
      { name: 'breadcrumb1', path: '/' },
      { name: 'breadcrumb2', path: '/movies' },
    ];
    const bc = render(<MovieBreadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with 1', () => {
    const breadcrumbsMockData = [{ name: 'breadcrumb1', path: '/' }];
    const bc = render(<MovieBreadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
  it('should be correct with undefined', () => {
    const breadcrumbsMockData = undefined;
    const bc = render(<MovieBreadcrumbs breadcrumbs={breadcrumbsMockData} />);
    expect(bc).toMatchSnapshot();
  });
});

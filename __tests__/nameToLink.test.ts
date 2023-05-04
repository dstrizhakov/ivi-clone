import { nameToLink } from '../src/helpers/nameToLink';

describe('nameToLink', () => {
  it('should return correct value', () => {
    expect(nameToLink('Oscar Isaak')).toBe('oscar-isaak');
  });
  it('should return empty value', () => {
    expect(nameToLink('')).toBe('');
  });
});

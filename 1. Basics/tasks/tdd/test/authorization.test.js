/*let token = 'Bearer vCVVCHjTylu2lMtEf5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF'.split("Bearer ")[1]; иначе undefined
token.length > 10;
/^[a-z0-9]+$/ig.test(token);*/

import CheckToken from '../src/authorization.js';

describe('CheckToken class:', () => {
  test('Empty string should return null', () => {
    // Arrange
    const token = new CheckToken('');

    // Act
    const res = token.isToken();

    // Assert
    expect(res).toBeNull();
  });

  test('String should be more than 10 characters', () => {
    // Arrange
    const token = new CheckToken('Bearer vCV');

    // Act and Assert
    expect( () => {token.isToken()}).toThrow(Error);
  });

  test('String should contain latin letters and digits only', () => {
    // Arrange
    const token = new CheckToken('Bearer vCVVCHjTylu2lMtEfабв5wjljd5VvBkuizKYGITwAoV75XXj5uiv30MLYtINF');

    // Act and Assert
    expect( () => {token.isToken()}).toThrow(Error);
  });
});
import FalsyArray from './falsyArray.js';

test('removeFalsyValues can remove all the falsy values', () => {
  // Arrange
  let array = new FalsyArray([45, '', 0, 'hello', 4.7, false]);
  const expectedResult = [45, 'hello', 4.7];

  //Act
  const result = array.removeFalsyValues();

  //Assert
  expect(result).toEqual(expectedResult);
})

test('The passed argument is an array', () => {
  // Arrange
  let array = new FalsyArray([45, '', 0, 'hello', 4.7, false]);

  //Act
  const result = array.isArray();

  //Assert
  expect(result).toBe(true);
})

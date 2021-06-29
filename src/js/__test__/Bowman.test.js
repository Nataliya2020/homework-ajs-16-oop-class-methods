import Bowman from '../Bowman';

test('checking the correctness of the object creation', () => {
  expect(new Bowman('John', 'Bowman')).toEqual({
    name: 'John',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

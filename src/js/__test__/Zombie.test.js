import Zombie from '../Zombie';

test('checking the correctness of the object creation', () => {
  expect(new Zombie('Stenly')).toEqual({
    name: 'Stenly',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

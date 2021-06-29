import Undead from '../Undead';

test('checking the correctness of the object creation', () => {
  expect(new Undead('Genry', 'Undead')).toEqual({
    name: 'Genry',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

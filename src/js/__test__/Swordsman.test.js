import Swordsman from '../Swordsman';

test('checking the correctness of the object creation', () => {
  expect(new Swordsman('Kuzya', 'Swordsman')).toEqual({
    name: 'Kuzya',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});

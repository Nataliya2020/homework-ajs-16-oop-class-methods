import Magician from '../Magician';

test('checking the correctness of the object creation', () => {
  expect(new Magician('Nicolas', 'Magician')).toEqual({
    name: 'Nicolas',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

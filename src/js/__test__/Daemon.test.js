import Daemon from '../Daemon';

test('checking the correctness of the object creation', () => {
  expect(new Daemon('Petr')).toEqual({
    name: 'Petr',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});

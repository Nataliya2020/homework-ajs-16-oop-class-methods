import Character from '../Character';

describe('testing the creation of objects and constructor attributes', () => {
  test('checking the correctness of the object creation', () => {
    expect(new Character('Ivan', 'Undead')).toEqual({
      name: 'Ivan',
      type: 'Undead',
      health: 100,
      level: 1,
    });
  });

  test('checking the name and type without data', () => {
    expect(() => new Character()).toThrow();
  });

  test('checking for a name less than 2', () => {
    expect(() => new Character('a', 'Swordsman')).toThrow();
  });

  test('checking for a name longer than 10', () => {
    expect(() => new Character('prepositions', 'Swordsman')).toThrow();
  });

  test('checking for recognition of the type name  error', () => {
    expect(() => new Character(1, 'Swordsman')).toThrow();
  });

  test('checking for recognition of the type with an error', () => {
    expect(() => new Character('name', 'Sportsmen')).toThrow();
  });
});

describe('testing methods', () => {
  test('checking the level of health', () => {
    function creationObj() {
      const objHealthZero = new Character('Vasya', 'Daemon');
      objHealthZero.health = 0;
      objHealthZero.level = 1;
      objHealthZero.attack = 10;
      objHealthZero.defence = 40;
      objHealthZero.levelUp();

      return objHealthZero;
    }

    expect(() => creationObj()).toThrowError(new Error('Нельзя повысить левел умершего'));
  });

  test('checking the level of health', () => {
    const newObj = new Character('Vasya', 'Daemon');
    newObj.health = 8;
    newObj.level = 1;
    newObj.attack = 10;
    newObj.defence = 40;
    newObj.levelUp();

    expect(newObj).toEqual({
      name: 'Vasya',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 12,
      defence: 48,
    });
  });

  test('checking the correctness of the calculation of the change in the life of the character', () => {
    const newObjCharacter = new Character('Fedor', 'Daemon');
    newObjCharacter.health = 20;
    newObjCharacter.level = 1;
    newObjCharacter.attack = 10;
    newObjCharacter.defence = 40;
    newObjCharacter.damage(10);

    expect(newObjCharacter).toEqual({
      name: 'Fedor',
      type: 'Daemon',
      health: 14,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });

  test('checking the correctness of the calculation of the change in the life of the character', () => {
    const newObjCharacter = new Character('Kate', 'Daemon');
    newObjCharacter.health = 0;
    newObjCharacter.level = 1;
    newObjCharacter.attack = 10;
    newObjCharacter.defence = 40;
    newObjCharacter.damage(10);

    expect(newObjCharacter).toEqual({
      name: 'Kate',
      type: 'Daemon',
      health: 0,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});

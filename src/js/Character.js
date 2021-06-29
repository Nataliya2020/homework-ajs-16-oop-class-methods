export default class Character {
  constructor(name, type) {
    if (!name || !type) {
      throw new Error('Данных нет');
    }

    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Данные некорректны');
    }

    const allowedType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    let count = 0;

    allowedType.forEach((item) => {
      if (type === item && typeof type === 'string') {
        this.type = type;
      } else {
        count += 1;
      }
    });

    if (count === allowedType.length) {
      throw new Error('Данные некорректны');
    }

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }

    this.level += 1;
    this.health = 100;
    this.attack += (this.attack / 100) * 20;
    this.defence += (this.defence / 100) * 20;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);

    if (this.health <= 0) {
      this.health = 0;
    }
  }
}

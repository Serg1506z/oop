import Character from "./classes/Character";
import { Bowerman, Swordsman, Magician, Undead, Zombie, Daemon } from "./classes/Classes";

test('Character', () => {
  const character = new Character('Alex', 'Bowerman');
  expect(character.level).toBe(1);
  expect(character.name).toBe('Alex');
  expect(character.type).toBe('Bowerman');
  expect(character.health).toBe(100);
});

test('Character fail', () => {
  expect(() => new Character('Alex', '')).toThrow('Тип персонажа "" должен быть одним из следующих: Bowman, Swordsman, Magician, Daemon, Undead, Zombie')
  expect(() => new Character('', 'Bowerman')).toThrow('Имя персонажа "" должно быть от 2 до 10 символов')
})

test('children', () => {
  expect(new Bowerman('Alex', 'Bowerman').attack).toBe(25)
  expect(new Bowerman('Alex', 'Bowerman').defence).toBe(25)
  expect(new Swordsman('Alex', 'Swordsman').attack).toBe(40)
  expect(new Swordsman('Alex', 'Swordsman').defence).toBe(10)
  expect(new Magician('Alex', 'Magician').attack).toBe(10)
  expect(new Magician('Alex', 'Magician').defence).toBe(40)
  expect(new Undead('Alex', 'Undead').attack).toBe(25)
  expect(new Undead('Alex', 'Undead').defence).toBe(25)
  expect(new Zombie('Alex', 'Zombie').attack).toBe(40)
  expect(new Zombie('Alex', 'Zombie').defence).toBe(10)
  expect(new Daemon('Alex', 'Daemon').attack).toBe(10)
  expect(new Daemon('Alex', 'Daemon').defence).toBe(40)
});

test('level up', () => {
  const character = new Bowerman('Alex', 'Bowerman');
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
})

test('level up fail', () => {
  const character = new Bowerman('Alex', 'Bowerman');
  character.health = 0;
  expect(() => character.levelUp()).toThrow('Нельзя повысить левел умершего')
})


test('damage', () => {
  const character = new Bowerman('Alex', 'Bowerman');
  character.damage(10);
  expect(character.health).toBe(92.5);
})

test('damage fail', () => {
  const character = new Bowerman('Alex', 'Bowerman');
  character.health = 0;
  expect(() => character.damage(10)).toThrow('Вы пинаете труп')
})
